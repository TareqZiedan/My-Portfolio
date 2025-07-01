const Contact = () => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block mb-1 font-medium" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-black dark:text-white"
          placeholder="your@email.com"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-black dark:text-white"
          rows={4}
          placeholder="Your message..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded transition-colors"
      >
        Send
      </button>
    </form>
  );
};

export default Contact;
