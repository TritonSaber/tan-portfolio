export interface Project {
    title: string;
    description: string;
    githublink: string;
    livelink: string;
    tags: string[];
}

let myProjects: Project[] = [
    {
        title: "Web Developer, Book n Eat",
        description: "A restaurant reservation website that allows users to book tables at restaurants, with three restaurant options for customers across different branches. Users can create accounts. The system also includes a menu, a like feature, and a review system.",
        githublink: "https://github.com/TritonSaber/CCAPDEV-MCO-28",
        livelink: "",
        tags: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "Node.js", "bcrypt"]
    },
    {
        title: "QA/Tester, SRIXON Pro Shop Alabang",
        description: "An inventory management system for SRIXON Pro Shop Alabang branch. QA and testing of the website to ensure functionality and usability.",
        githublink: "https://github.com/itsBachi/CSSWENG-TRIBOG",
        livelink: "https://cssweng-tribog-r1rtnqqkt-itsbachi.vercel.app/deliveries",
        tags: ["QA", "Testing"]
    },
    {
        title: "QA/Tester, Jack Frost Ice Cream Website",
        description: "A website for Jack Frost Ice Cream, a local ice cream brand. QA and testing of the website to ensure functionality and usability. Utilized both Jest and Selenium IDE for testing.",
        githublink: "https://github.com/AureliusLim/jack-frost-premium",
        livelink: "https://jack-frost-premium-theta.vercel.app/",
        tags: ["QA", "Testing", "Jest", "Selenium IDE"]
    }
]

export { myProjects };