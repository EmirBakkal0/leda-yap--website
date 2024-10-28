import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex  h-svh flex-col items-center bg-black text-lg text-white">
      <img src={"/404.jpg"} alt="404 error" width={500} />
      <h1 className="p-2 text-xl font-bold">Oops!</h1>
      <p className="p-2">Beklenmeyen bir hata oluştu!</p>
      <Link href="/">
        <button className="border-deep-purple-800 rounded-md border-solid bg-red-900 p-2 shadow-lg">
          Anasayfaya geri dön.
        </button>
      </Link>
      {/* <p>
                <i>{error.statusText || error.message}</i>
            </p> */}
    </div>
  );
}
