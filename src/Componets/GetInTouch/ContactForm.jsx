export const ContactForm = () => {
  return (
    <div className="p-6 w-full ">
      <form action="">
        <fieldset className=" flex flex-col gap-4 *:w-full *:rounded-md">
          {/* name and email */}

          <div className="flex gap-4 *:rounded-md *:focus:ring-c-sucess">
            <input
              type="text"
              name="Firstname"
              className="p-2 w-full "
              placeholder="Enter your firstname"
            />
            <input
              type="email"
              name="Email"
              className="p-2 w-full"
              placeholder="Enter your email"
            />
          </div>
          {/* number */}
          <input
            className="p-2"
            type="number"
            placeholder="Enter your number"
          />
          {/* textarea */}
          <textarea
            name=""
            id=""
            className="p-2"
            cols="30"
            rows="5"
            placeholder="Your Message Here"
          ></textarea>
          <button type="button" className="bg-first p-2">
            Send Message
          </button>
        </fieldset>
      </form>
    </div>
  );
};
