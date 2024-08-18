import {DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog.tsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MediaLibraryDispatch, MediaLibraryState} from "@/wd-media-ui/stores";
import {z} from "zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {createFolder, patchFolder, setDialogFormIsOpen} from "@/wd-media-ui/stores/slices/folderSlice.ts";

const schema = z.object({
  label: z.string().min(1, "Ce champs ne doit pas être vide"),
});
type FormData = z.infer<typeof schema>

function FolderForm() {
  const dispatch = useDispatch<MediaLibraryDispatch>();
  const { isOpen, folder, targetFolder } = useSelector((state: MediaLibraryState) => state.folder.dialogForm)
  const [title, setTitle] = useState('titre');
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      label: folder?.label || '',
    }
  });

  useEffect(() => {
    if (folder !== null) {
      setTitle(`Mise à jour du dossier ${folder.label}`);
    } else {
      setTitle(`Nouveau dossier dans ${targetFolder?.label}`);
    }
  }, [folder]);

  useEffect(() => {
    form.reset({
      label: folder?.label || '',
    })
  }, [isOpen, folder, form]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      // mise à jour
      if (folder !== null) {
        await dispatch(patchFolder({ id: folder.id, data }))
      }
      // creation
      if (targetFolder !== null) {
        await dispatch(createFolder({
          label: data.label,
          parent: String(targetFolder["@id"]),
        }))
      }
    } catch ( e ) {
    }

    dispatch(setDialogFormIsOpen(false));
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Dossier</DialogTitle>
        <DialogDescription>
          {title}
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="label"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Libellé</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage className="text-destructive"/>
              </FormItem>
            )}
          />

          <DialogFooter>
            <FormItem>
              <Button type="submit" className="w-full" disabled={!form.formState.isValid}>
                Enregistrer
              </Button>
            </FormItem>
          </DialogFooter>
        </form>
      </Form>
    </>
  )
}

export default FolderForm;
