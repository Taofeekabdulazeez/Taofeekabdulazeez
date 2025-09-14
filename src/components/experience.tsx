import { experiences } from "@/data";
import { formatDate } from "@/utils";

export default function ExperienceSection() {
  return (
    <section>
      <Experiences />
    </section>
  );
}

function Experiences() {
  return (
    <div className="">
      {experiences.map((exp) => (
        <div key={exp.company} className="grid md:grid-cols-2 gap-6">
          <div>
            <h2>{exp.company}</h2>
            <div>
              <span>
                {formatDate(exp.startDate)} -{" "}
                {exp.endDate ? formatDate(exp.endDate) : "Present"}
              </span>
              <h3>{exp.role}</h3>
            </div>
            <span>Work experience invloves:</span>
            <div>
              {Object.keys(exp.techStack).map((category) => (
                <div key={category}>
                  <h4>{category}</h4>
                  <p>
                    {exp.techStack[category]
                      .map((stack) => stack.name)
                      .join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p>{exp.achievements}</p>
            {exp.responsibilities.map((resp) => (
              <li key={resp}>{resp}</li>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
