import {toast} from "@/components/ui/use-toast.ts";

export const showToast = (
  message: string,
  type: "default" | "destructive" | null | undefined = 'default',
  description: string | undefined = undefined) => {
  toast({
    title: message,
    description,
    variant: type,
  });
};
