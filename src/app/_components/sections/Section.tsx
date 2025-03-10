import { HTMLAttributes, useEffect, useRef } from "react";
const Section = ({ id, children, setActiveSection, className, ...props }: { id: string; children: React.ReactNode; setActiveSection: (id: string) => void, className?:string } & HTMLAttributes<HTMLElement>) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveSection(id);
                }
            },
            { threshold: .3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [id, setActiveSection]);

    return (
        <section ref={ref} id={id} className={className} {...props}>
            {children}
        </section>
    );
};

export default Section