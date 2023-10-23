export const data = {
    label: "Class 9th",
    value: false,
    name: "class9",
    child: [
        {
            label: "section A",
            name: "sectionA",
            value: false,
            parentName: "class9",
            child: [
                {
                    label: "Student A1",
                    value: false,
                    parentName: "sectionA"
                },
                {
                    label: "Student B1",
                    value: false,
                    parentName: "sectionA"
                }
            ]
        },
        {
            label: "section B",
            name: "sectionb",
            value: false,
            parentName: "class9",
            child: [
                {
                    label: "Student A",
                    value: false,
                    parentName: "sectionb"
                },
                {
                    label: "Student B",
                    value: false,
                    parentName: "sectionA",
                }
            ]
        }
    ]
};
