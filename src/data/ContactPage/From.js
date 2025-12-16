export const FormData = {
  title: "Kirim Pesan Langsung",
  description:
    "Isi formulir di bawah ini dan tim kami akan segera merespons Anda.",
  buttonText: "Kirim Pesan",
  fields: {
    name: {
      label: "Nama Lengkap",
      id: "name",
      type: "text",
    },
    email: {
      label: "Alamat Email",
      id: "email",
      type: "email",
    },
    subject: {
      label: "Subjek",
      id: "subject",
      type: "text",
    },
    message: {
      label: "Pesan Anda",
      id: "message",
      type: "textarea",
      rows: 5,
    },
  },
};
