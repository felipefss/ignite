import loginCover from "@/assets/login-cover.png";
import logoGoogle from "@/assets/logo-google.svg";
import logoGithub from "@/assets/logo-github.svg";
import logoVisitor from "@/assets/logo-visitor.svg";
import Image from "next/image";

export default function Login() {
  return (
    <div className="flex items-center justify-center p-5">
      <Image
        src={loginCover}
        alt="Picture of a lady reading a book on the sofa"
        className="h-[calc(100vh-2.5rem)] w-auto"
      />

      <section className="mx-auto w-[372px]">
        <div className="mb-10 flex flex-col justify-center">
          <span className="text-2xl font-bold leading-5 text-gray-100">
            Boas vindas!
          </span>
          <span className="leading-6 text-gray-200">
            Faça seu login ou acesse como visitante
          </span>
        </div>

        <div className="grid gap-4">
          <button className="flex cursor-pointer items-center gap-5 rounded-md bg-gray-600 p-5 hover:opacity-80">
            <Image src={logoGoogle} alt="" />
            <span>Entrar com Google</span>
          </button>
          <button className="flex cursor-pointer items-center gap-5 rounded-md bg-gray-600 p-5 hover:opacity-80">
            <Image src={logoGithub} alt="" />
            <span>Entrar com GitHub</span>
          </button>
          <button className="flex cursor-pointer items-center gap-5 rounded-md bg-gray-600 p-5 hover:opacity-80">
            <Image src={logoVisitor} alt="" />
            <span>Acessar como visitante</span>
          </button>
        </div>
      </section>
    </div>
  );
}
