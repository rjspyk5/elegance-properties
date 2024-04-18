export const ContactForm = () => {
  return (
    <div className="w-full ">
      <form>
        <fieldset className=" flex flex-col gap-4 *:w-full *:rounded-md">
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

          <input
            className="p-2"
            type="number"
            placeholder="Enter your number"
          />

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
