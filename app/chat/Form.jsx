import { revalidateTag } from "next/cache";
import SubmitButton from "./SubmitButton";
import apiFetch from "@/functions/apiFetch";
import * as toast from "@/components/ToastComponent";

const Form = () => {
  const submit = async (form) => {
    "use server";

    try {
      await apiFetch("api/chat/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.get("name"),
          message: form.get("message"),
        }),
      }).then(async (res) => {
        const result = await res.json();

        if (result.status === 201) {
          // toast.success(result.message);
          console.log(result.message);
          revalidateTag("get-messages");
        } else {
          // toast.error(result.message);
          console.error(result.message);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="flex w-full flex-col gap-4 sm:w-2/3" action={submit}>
      <div className="flex flex-col">
        <label htmlFor="name">Nome</label>
        <input
          className="resize-none border-none bg-black p-4 text-accent outline-none"
          type="text"
          name="name"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message">Mensagem</label>
        <textarea
          className="resize-none border-none bg-black p-4 text-accent outline-none"
          name="message"
          cols="30"
          rows="5"
          required
        ></textarea>
      </div>
      <SubmitButton />
    </form>
  );
};

export default Form;
