import { useEffect, useRef } from "react";
const Section = ({ id, children, setActiveSection, className }: { id: string; children: React.ReactNode; setActiveSection: (id: string) => void, className?:string }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveSection(id);
                }
            },
            { threshold: .3 } // Define quando a seção está visível (50% visível)
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
        <section ref={ref} id={id} className={className}>
            {children}
        </section>
    );
};

export default Section