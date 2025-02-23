export interface Testimonial {
    id: number;
    name: string;
    designation: string;
    testimonial: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Md Asif Nawaz",
        designation: "Senior Frontend Developer, Akelius Technology AB",
        testimonial: "Oritro is a passionate web developer, from front end to back end he run everywhere."
    },
    {
        id: 2,
        name: "Subrata Das",
        designation: "Owner, PixelOwl Design & Photography",
        testimonial: "Oritro is an excellent web developer and I will hire him without any hesitation."
    },
    {
        id: 3,
        name: "John Doe",
        designation: "MD, Demo Company",
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
        id: 4,
        name: "Jane Doe",
        designation: "CEO, Test Company",
        testimonial: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
    }
]
