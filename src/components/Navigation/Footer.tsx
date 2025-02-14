import Image from "next/image";
import Link from "next/link";

interface Contact {
    image: string;
    type: string;
    username: string;
    link: string;
}

const contacts: Contact[] = [
    {
        image: "/images/Footer/gmail.svg",
        type: "Email",
        username: "kenkovit.official@gmail.com",
        link: "https://mail.google.com/mail/u/0/#inbox?compose=new",
    },
    {
        image: "/images/Footer/whatsapp.svg",
        type: "Whatsapp",
        username: "Kenkovit",
        link: "https://wa.me/628123456789",
    },
    {
        image: "/images/Footer/instagram.svg",
        type: "Instagram",
        username: "@kenkovit",
        link: "https://www.instagram.com/kenkovit",
    },
    {
        image: "/images/Footer/facebook.svg",
        type: "Facebook",
        username: "Kenkovit",
        link: "https://www.facebook.com/kenkovit",
    },
    {
        image: "/images/Footer/youtube.svg",
        type: "Youtube",
        username: "Kenkovit",
        link: "https://www.youtube.com/kenkovit",
    },
];

const Footer = () => {
    return (
        <footer className="flex flex-col">
            <div className="bg-pink1 w-full">
                <div className="my-14 flex h-auto w-full flex-col items-center justify-center sm:flex-row sm:justify-start">
                    <div className="sm:w-1/2 sm:pl-8">
                        <Image 
                            src="/images/logo_kenko_white.svg" 
                            alt="Kenkovit Logo" 
                            width={200} 
                            height={78} 
                            className="md:ml-[25%] mb-10 md:mb-none w-24 md:w-40 h-auto"
                        />
                    </div>
                    <div className="flex grid-cols-1 gap-2 text-white sm:grid md:grid-cols-2 md:gap-6">
                        {contacts.map((contact, index) => (
                            <div className="flex items-center" key={index}>
                                <Link href={contact.link} target="_blank" rel="noopener noreferrer" aria-label={contact.type}>
                                <div className="mx-[2vw] cursor-pointer sm:mx-0 sm:mr-2">
                                    <Image
                                    src={contact.image}
                                    alt={contact.type}
                                    width={35}
                                    height={35}
                                    style={{ filter: "brightness(0) invert(0.9)" }}
                                    />
                                </div>
                                </Link>
                                <Link href={contact.link} target="_blank" rel="noopener noreferrer" aria-label={contact.username}>
                                <p
                                    className="mt-[-5px] hidden text-[12px] font-normal sm:block sm:text-[14px]"
                                    dangerouslySetInnerHTML={{ __html: contact.username }}
                                />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex h-[50px] w-full items-center justify-center bg-brown1 text-sm text-white sm:h-[70px] sm:text-sm md:pl-20">
                <p>© 2024 KENKOVIT INDONESIA – All Rights Reserved</p>
            </div>
        </footer>
            
    );
};

export default Footer;