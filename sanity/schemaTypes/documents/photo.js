export default {
  name: "photo",
  title: "Photo",
  type: "document",
  fields: [
    {
      name: "favorite",
      title: "Favorite",
      type: "boolean",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
