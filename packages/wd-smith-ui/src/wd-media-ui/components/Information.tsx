import {useDispatch, useSelector} from "react-redux";
import {MediaLibraryDispatch, MediaLibraryState} from "@/wd-media-ui/stores";
import {Button} from "@/components/ui/button.tsx";
import {setCurrentMedia} from "@/wd-media-ui/stores/slices/mainSlice.ts";
import {updateMedia, updateMediaFile, UpdateMediaFileParams} from "@/wd-media-ui/stores/slices/mediaSlice.ts";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faUpload} from '@fortawesome/free-solid-svg-icons';
import {cn, dateFormat, isNotEmpty} from "@/lib/utils.ts";
import {SubmitHandler, useForm} from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Components} from "@/wd-media-ui/api/types/openapi";
import {useEffect} from "react";
import {AspectRatio} from "@/components/ui/aspect-ratio.tsx";
import Media from "@/wd-media-ui/components/Media.tsx";
import Upload from "@/wd-media-ui/components/Upload.tsx";

const schema = z.object({
  label: z.string().min(1, "Ce champs ne doit pas être vide"),
  alt: z.string().optional(),
  description: z.string().optional(),
  file: z.any(),
});

type FormData = z.infer<typeof schema>

function Information() {
  // const { updateStatus } = useSelector((state: MediaLibraryState) => state.media);
  const media = useSelector((state: MediaLibraryState) => state.main.currentMedia);
  if (media === null) {
    return (
      <p>Pas de media </p>
    )
  }


  const dispatch = useDispatch<MediaLibraryDispatch>();
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'all',
    defaultValues: {
      label: media.label,
      alt: media.alt === undefined ? '' : String(media.alt),
      description: media.description === undefined ? '' : String(media.description),
      file: null
    }
  });

  useEffect(() => {
    if (media) {
      // Réinitialiser le formulaire avec les nouvelles valeurs de media
      form.reset({
        label: media.label || '',
        alt: media.alt === undefined ? '' : String(media.alt),
        description: media.description === undefined ? '' : String(media.description),
        file: null
      });
    }
  }, [media, form]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    let file = null;
    let updatedMedia = null;
    if (data.file instanceof FileList) {
      file = data.file[0] ?? null;
      delete data.file;
    }

    const mediaData: Components.Schemas.Media = {
      ...{ id: media.id },
      ...data
    }

    updatedMedia = await dispatch(updateMedia(mediaData));

    if (file !== null && media.id !== undefined) {
      const mediaFileData: UpdateMediaFileParams = {
        ...{ id: media.id },
        ...{ file }
      }

      updatedMedia = await dispatch(updateMediaFile(mediaFileData));
    }

    dispatch(setCurrentMedia(updatedMedia.payload as Components.Schemas.Media))

  }


  const handleCloseClick = () => {
    dispatch(setCurrentMedia(null));
  };

  return (
    <div className="h-full">
      <div className="border-y-2 h-20 flex items-center">
        <div className="px-6 flex items-center justify-between w-full">
          <span className="text-ellipsis">{media.label}</span>
          <Button variant="ghost" onClick={handleCloseClick}>
            <FontAwesomeIcon icon={faTimes} className="h-5 w-5 text-gray-500"/>
          </Button>
        </div>
      </div>
      <div className="px-6 pb-6 h-[calc(100%-5rem)] overflow-y-auto">
        <Upload media={media}>
          <div className="group bg-background mt-3 cursor-pointer">
            <div className="relative">
              <AspectRatio ratio={4 / 3} className={cn('rounded-lg overflow-hidden', { 'bg-checkerboard': media.thumbnail !== undefined || media.svg })}>
                <Media media={media}></Media>
              </AspectRatio>
              <div className="hidden absolute inset-6 flex items-center justify-center group-hover:!flex rounded-lg bg-primary/25 text-white border-dashed border-2">
                <FontAwesomeIcon icon={faUpload} className="text-4xl"/>
              </div>
            </div>
          </div>
        </Upload>
        <div className="my-3">
          <div className="mb-2 border-b-2 flex justify-between">
            <div className="flex justify-start">Created at</div>
            <div className="flex justify-end">{isNotEmpty(media.createdAt) && dateFormat(String(media.createdAt))}</div>
          </div>
          <div className="mb-2 border-b-2 flex justify-between">
            <div className="flex justify-start">Updated at</div>
            <div className="flex justify-end">{isNotEmpty(media.updatedAt) && dateFormat(String(media.updatedAt))}</div>
          </div>
          <div className="mb-2 border-b-2 flex justify-between">
            <div className="flex justify-start">Extension</div>
            <div className="flex justify-end">{media.extension}</div>
          </div>
          <div className="mb-2 border-b-2 flex justify-between">
            <div className="flex justify-start">MimeType</div>
            <div className="flex justify-end">{media.mimeType}</div>
          </div>
        </div>

        <div className="max-w-md mx-auto mt-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

              <FormField
                control={form.control}
                name="label"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Libellé</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-600"/>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="alt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Balise alt</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-600"/>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-600"/>
                  </FormItem>
                )}
              />

              <FormItem>
                <Button type="submit" className="w-full">
                  Valider
                </Button>
              </FormItem>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Information;
