'use client'

import { Button, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import {useForm, Controller} from "react-hook-form";
import "easymde/dist/easymde.min.css";
import { data } from "autoprefixer";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

function NewIssuePage() {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  return (
    <form className="max-w-xl space-y-3" onSubmit={handleSubmit(async(data)=>{
      axios.post('/api/issues', data);
      router.push('/issues');
    })}>
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register('title')}/>
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        defaultValue=""
        render={({ field }) => <SimpleMDE  placeholder="Description" className="rounded-lg" {...field}/> }
      />
      <Button>Submit New Issue</Button>
    </form>
  );
}

export default NewIssuePage;
