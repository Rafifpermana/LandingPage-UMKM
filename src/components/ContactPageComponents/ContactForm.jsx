import { FormData } from "../../data/ContactPage/From";

export default function ContactForm() {
  const { title, description, buttonText, fields } = FormData;

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              {title}
            </h2>
            <p className="text-lg text-gray-500 mt-4">{description}</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor={fields.name.id}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {fields.name.label}
                </label>
                <input
                  type={fields.name.type}
                  id={fields.name.id}
                  name={fields.name.id}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor={fields.email.id}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {fields.email.label}
                </label>
                <input
                  type={fields.email.type}
                  id={fields.email.id}
                  name={fields.email.id}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor={fields.subject.id}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {fields.subject.label}
              </label>
              <input
                type={fields.subject.type}
                id={fields.subject.id}
                name={fields.subject.id}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor={fields.message.id}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {fields.message.label}
              </label>
              <textarea
                id={fields.message.id}
                name={fields.message.id}
                rows={fields.message.rows}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
