import "../App.css";
import { FaJava, FaReact, FaGuitar } from "react-icons/fa";
import { SiUnrealengine, SiRiotgames } from "react-icons/si";
import { GiMountainClimbing } from "react-icons/gi";

export const Skills = () => {
    const calculateYearsAgo = (year) => {
        const currentYear = new Date().getFullYear();
        const yearsAgo = currentYear - year;
        return Math.floor(yearsAgo);
    };

    const frontEndYears = calculateYearsAgo(2017);
    const backEndYears = calculateYearsAgo(2018);
    const guitarYears = calculateYearsAgo(2018);
    const unrealYears = calculateYearsAgo(2022);

    return (
        <div style={{ width: "100%" }}>
            <h4 className="section-header">Skills</h4>
            <ul>
                <li className="skill">
                    <span className="skill-name secondary-text">
                        <FaReact /> Front-End Development
                    </span>
                    <div className="skill-bar">
                        <div className="skill-per" style={{ maxWidth: "100%" }}>
                            <p className="skill-exp">{frontEndYears} years</p>
                        </div>
                    </div>
                </li>
                <li className="skill">
                    <span className="skill-name secondary-text">
                        <FaJava /> Back-End Development
                    </span>
                    <div className="skill-bar">
                        <div className="skill-per" style={{ maxWidth: "80%" }}>
                            <p className="skill-exp">{backEndYears} years</p>
                        </div>
                    </div>
                </li>
                <li className="skill">
                    <span className="skill-name secondary-text">
                        <SiRiotgames /> League of Legends
                    </span>
                    <div className="skill-bar">
                        <div className="skill-per" style={{ maxWidth: "60%" }}>
                            <p className="skill-exp">Emerald</p>
                        </div>
                    </div>
                </li>
                <li className="skill">
                    <span className="skill-name secondary-text">
                        <GiMountainClimbing /> Climbing
                    </span>
                    <div className="skill-bar">
                        <div className="skill-per" style={{ maxWidth: "45%" }}>
                            <p className="skill-exp">V7 / 5.12a</p>
                        </div>
                    </div>
                </li>
                <li className="skill">
                    <span className="skill-name secondary-text">
                        <FaGuitar /> Guitar
                    </span>
                    <div className="skill-bar">
                        <div className="skill-per" style={{ maxWidth: "35%" }}>
                            <p className="skill-exp">{guitarYears} years</p>
                        </div>
                    </div>
                </li>
                <li className="skill">
                    <span className="skill-name secondary-text">
                        <SiUnrealengine /> Unreal Engine
                    </span>
                    <div className="skill-bar">
                        <div className="skill-per" style={{ maxWidth: "30%" }}>
                            <p className="skill-exp">{unrealYears} years</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};
