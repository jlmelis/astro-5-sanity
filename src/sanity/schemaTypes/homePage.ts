export const homePage = {
    name: 'homePage',
    type: 'document',
    title: 'Home Page',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [{ type: 'block' }]
      }
    ]
  }