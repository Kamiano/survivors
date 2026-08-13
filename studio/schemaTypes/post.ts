import { defineType } from 'sanity';

export default {
    name: 'post',
    type: 'document',
    title: 'News Post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Post Title',
            validation: (Rule: any) => Rule.required().error('A title is required.'),
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug / URL Extension',
            description: 'Click "Generate" to automatically build a clean URL link from the title.',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required().error('A slug is required to link the page.'),
        },
        {
            name: 'publishedAt',
            type: 'date',
            title: 'Published Date',
            options: {
                dateFormat: 'YYYY-MM-DD',
            },
            initialValue: () => new Date().toISOString().split('T')[0],
        },
        {
            name: 'featuredOnHomepage',
            type: 'boolean',
            title: '★ Push/Feature on Homepage?',
            description: 'Turn this on to push this specific article automatically into one of the 3 news slots on the homepage.',
            initialValue: false,
        },
        {
            name: 'mainImage',
            type: 'image',
            title: 'Featured Image',
            options: {
                hotspot: true, // Allows you to crop faces cleanly in the dashboard
            },
        },
        {
            name: 'categories',
            type: 'array',
            title: 'Categories',
            description: 'Assign themes like "Influence", "Media Release", or "Power".',
            of: [{ type: 'reference', to: [{ type: 'category' }] }],
        },
        {
            name: 'excerpt',
            type: 'text',
            title: 'Excerpt Summary',
            description: 'This snippet displays underneath the image on the main feed list page.',
            rows: 3,
        },
        {
            name: 'body',
            type: 'array',
            title: 'Full Article Body Content',
            description: 'The complete write-up of your news story or official statement.',
            of: [{ type: 'block' }, { type: 'image' }],
        },
    ],
};