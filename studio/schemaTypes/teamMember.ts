import { defineField, defineType } from 'sanity';

export const teamMember = defineType({
    name: 'teamMember',
    title: 'Team Member',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Role / Designation',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Section Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Secretariat', value: 'secretariat' },
                    { title: 'Strategy Program Advisor', value: 'strategy_advisor' },
                    { title: 'Board Member', value: 'board' },
                ],
                layout: 'radio',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'bio',
            title: 'Biography',
            type: 'text',
            rows: 6,
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers display first (e.g., 1, 2, 3)',
            initialValue: 0,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'role',
            media: 'image',
        },
    },
});