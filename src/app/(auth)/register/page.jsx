import AgreementCheck from "./AgreementCheck"

export default function RegisterPage() {
  const actionRegister = async (formData) => {
    "use server"
    console.log(formData.get("name"))
  }

  return (
    <section className="max-w-content m-auto px-content">
      <div className="pt-12">
        <h1 className="mb-9 text-2xl font-bold">
          선물해 줄 친구에게 <br />
          당신의 이름을 <br />
          알려주세요
        </h1>
        <form action={actionRegister} className="space-y-5">
          <input
            className="w-full text-sm bg-transparent outline-none border-b border-primary py-2"
            type="text"
            name="name"
            placeholder="닉네임"
            required
          />
          <AgreementCheck />
          <button className="w-full text-white font-semibold border border-primary rounded-lg box-border p-2 bg-primary font-xs mb-6">
            케이크 만들러 가기
          </button>
        </form>
      </div>
    </section>
  )
}
