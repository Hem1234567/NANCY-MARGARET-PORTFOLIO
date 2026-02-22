import SectionBlock from "./SectionBlock";

const certifications = [
    {
        title: "Cybersecurity Analysis & Design",
        issuer: "NASSCOM IT-ITeS Sector Skills Council",
        category: "Gold Category",
    },
    {
        title: "Data Science for Beginners",
        issuer: "NASSCOM IT-ITeS Sector Skills Council",
        category: "Bronze Category",
    },
    {
        title: "Python for Data Science",
        issuer: "NPTEL Online Certification, IIT Madras",
        category: "",
    },
];

const CertificationsSection = () => (
    <SectionBlock id="certifications" title="Certifications">
        <div className="space-y-8">
            {certifications.map((cert) => (
                <div
                    key={cert.title}
                    className="group border-l-2 border-black/10 pl-6 py-2 hover:border-black transition-colors duration-300"
                >
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                        {cert.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mt-2">
                        <span className="text-foreground font-medium">{cert.issuer}</span>
                        {cert.category && (
                            <>
                                <span className="hidden md:inline text-foreground/20">•</span>
                                <span className="font-mono text-sm text-foreground/60 italic">
                                    {cert.category}
                                </span>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </SectionBlock>
);

export default CertificationsSection;
