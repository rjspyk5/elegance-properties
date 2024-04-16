export const ContactForm = () => {
    return (
      <div className='p-6 w-full'>
        <form action=''>
          <fieldset className=' flex flex-col gap-4 *:w-full *:rounded-md'>
            {/* name and email */}
            <h1 className='text-center'>Get in touch</h1>
            <div className='flex gap-4 *:rounded-md *:focus:ring-c-sucess'>
              <input
                type='text'
                name='Firstname'
                placeholder='Enter your firstname'
              />
              <input type='email' name='Email' placeholder='Enter your email' />
            </div>
            {/* number */}
            <input className='' type='number' placeholder='Enter your number' />
            {/* textarea */}
            <textarea
              name=''
              id=''
              cols='30'
              rows='5'
              placeholder='Your Message Here'
            ></textarea>
            <button type='button' className='bg-c-info p-2'>
              Send Message
            </button>
          </fieldset>
        </form>
      </div>
    );
  };
  