const Contact = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Information</h2>
          <div className="text-gray-700 space-y-4">
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a
                href="mailto:sachinpatelgurjar2295@gmail.com"
                className="text-blue-600 hover:underline"
              >
                sachinpatelgurjar2295@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Contact:</span> +91 8959279135
            </p>
            <p>
              <span className="font-semibold">Location:</span> Khandwa, Madhya Pradesh
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
