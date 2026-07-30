export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Category Name',
      description: 'e.g., Media Release, Power, Influence',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ],
};