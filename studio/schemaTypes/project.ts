export default {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
        },
        {
            name: 'excerpt',
            title: 'Card Short Excerpt',
            type: 'text',
            description: 'A brief 1-2 sentence preview for the home page grid card layout.',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any; }; }; }) => Rule.max(160).warning('Keep it short so the cards remain uniform.'),
        },
        {
            name: 'description',
            title: 'Full Project Description',
            type: 'array',
            description: 'The complete details, stories, and deep text for the separate internal page.',
            of: [{ type: 'block' }], // Enables rich text formatting for the inner profile page
        },
        {
            name: 'image',
            title: 'Project Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'color',
            title: 'Brand Color (Hex Code)',
            type: 'string',
        },
    ],
};