module.exports = {
    id: 1,
    title: 'Quick Release Smoke test',
    columns: [
        {
            id: 1,
            title: 'To Do',
            cards: [
                {
                    id: 1241,
                    title: 'Campaign modifications in VCMS',
                    url: 'http://index.hu'
                },
                {
                    id: 2232,
                    title: 'Campaign Analysis page',
                    url: 'http://index.hu'
                },
                {
                    id: 22332,
                    title: 'Campaign settings by API calls',
                    url: 'http://index.hu'
                },
                {
                    id: 72232,
                    title: 'Create new contact by API',
                    url: 'http://index.hu'
                }
            ]
        },
        {
            id: 2,
            title: 'In Progress',
            cards: [
                {
                    id: 121,
                    title: 'Segmentation',
                    url: 'http://index.hu'
                },
                {
                    id: 16221,
                    title: 'Prepare to send Emails',
                    url: 'http://index.hu'
                }
            ],
            groups: [
                {
                    id: 12421,
                    title: 'Sending campaigns',
                    cards: [
                        {
                            id: 9121,
                            title: 'Send colorful VCMS templates',
                        },
                        {
                            id: 91211,
                            title: 'Send colorful CCMS templates'
                        }
                    ]
                },
                {
                    id: 12421,
                    title: 'Launching imports',
                    cards: [
                        {
                            id: 29121,
                            title: '10k auto-import'
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: 'Testing',
            cards: []
        },
        {
            id: 4,
            title: 'Done',
            cards: [
                {
                    id: 12141,
                    title: 'Launch campaign in the Content Management System'
                }
            ],

            groups: [
                {
                    id: 12421,
                    title: 'Campaigns sent',
                    cards: [
                        {
                            id: 9121,
                            title: 'CCMS campaign with registration form',
                            url: 'http://index.hu'
                        }
                    ]
                }
            ]
        }

    ]
};