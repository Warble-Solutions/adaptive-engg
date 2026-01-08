"use client";

import {
    Rocket,
    Factory,
    TrendingUp,
    Trophy,
    MapPin,
    Cpu,
    Activity,
    Zap
} from "lucide-react";

export default function JourneyTimeline() {
    // Brand Color: #049A89
    // Shades generated for gradient effect
    const journeyData = [
        {
            year: "2014",
            icon: Rocket,
            points: [
                "15 Engineers",
                "100MW Renewable Installed Capacity",
                "Authorized System Integrators - Schneider-Electric"
            ],
            color: "bg-[#aeece6]", // Lightest
            position: "top"
        },
        {
            year: "2016",
            icon: Factory,
            points: [
                "First Panel Manufacturing Factory",
                "ISO 9001:2015 - TUV NORD",
                "250MW Renewable Installed Capacity"
            ],
            color: "bg-[#7de2d8]",
            position: "bottom"
        },
        {
            year: "2018",
            icon: TrendingUp,
            points: [
                "4.8GW+ Renewable Installed Capacity",
                "HT/LT Panels",
                "Highest Revenue Growth in SCADA - Schneider-Electric"
            ],
            color: "bg-[#4cd8ca]",
            position: "top"
        },
        {
            year: "2020",
            icon: Zap,
            points: [
                "14GW+ Renewable Installed Capacity",
                "Introduced Renewable PPC",
                "Outstanding Achievement in Solar Segment - EQ Magazine",
                "Best End User & EPC Solution Provider - Schneider-Electric",
                "Best Solar Monitoring Company of the Year - ET Now"
            ],
            color: "bg-[#1bcbbc]",
            position: "bottom"
        },
        {
            year: "2022",
            icon: MapPin,
            points: [
                "Single location 1GW",
                "Single Largest Order - 3.6GW",
                "Second Factory - 60,000/- sq.ft.",
                "Preferred Project Partner of Industry Leaders"
            ],
            color: "bg-[#049a89]", // Brand Base
            position: "top"
        },
        {
            year: "2024",
            icon: Cpu,
            points: [
                "40GW+ Renewable Installed Capacity",
                "New Office - 100+ workstations",
                "Participation in International Expos",
                "Monitoring Solutions - PM KUSUM",
                "10,00,000+ SCADA Tags in a single project",
                "Hardware In Loop (HIL) Testing - PPC",
                "Introduced EMS - BESS",
                "Transition From commissioning (2014) to configuration (2024)",
                "Highest Revenue in Digitization - Schneider-Electric"
            ],
            color: "bg-[#037a6d]", // Darker
            position: "bottom"
        },
        {
            year: "Current",
            icon: Activity,
            points: [
                "51GW+ Solar Installed Capacity",
                "300+ Team Strength",
                "30+ Years of Experience",
                "650+ Renewable Energy Plants Monitored",
                "10,000+ Electrical Panel Supplied",
                "1000+ Projects Completed",
                "25GW+ Yearly Capacity"
            ],
            color: "bg-[#025c52]", // Darkest
            position: "top"
        }
    ];

    return (
        <div className="w-full">
            {/* --- DESKTOP VIEW (Horizontal Infographic) --- */}
            <div className="hidden lg:block w-full overflow-x-auto overflow-y-hidden pb-[32rem] pt-[32rem] no-scrollbar">
                <div className="min-w-[1200px] px-12">
                    <div className="relative">

                        {/* Main Arrow Bar */}
                        <div className="flex items-stretch h-16 relative z-10 w-full drop-shadow-2xl">
                            {journeyData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex-1 relative flex items-center justify-center font-bold text-2xl text-white font-heading ${item.color} ${index === 0 ? "rounded-l-full" : ""
                                        } ${index === journeyData.length - 1 ? "pr-12" : ""}`}
                                >
                                    <span className="drop-shadow-md relative z-10">{item.year}</span>

                                    {/* Arrow shape for the last item */}
                                    {index === journeyData.length - 1 && (
                                        <div
                                            className="absolute top-0 bottom-0 -right-8 w-0 h-0 
                                            border-t-[32px] border-t-transparent
                                            border-b-[32px] border-b-transparent
                                            border-l-[32px] border-l-[#025c52]"
                                        ></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* DESKTOP Connectors & Content */}
                        <div className="absolute inset-0 top-8 flex h-0">
                            {journeyData.map((item, index) => (
                                <div key={index} className="flex-1 relative flex justify-center">

                                    {/* Line */}
                                    <div className={`absolute w-0.5 bg-primary/40 ${item.position === "top"
                                        ? "bottom-8 h-20"
                                        : "top-8 h-20"
                                        }`}></div>

                                    {/* Icon */}
                                    <div className={`absolute w-16 h-16 rounded-full bg-slate-900 border-4 border-[#049A89] flex items-center justify-center shadow-[0_0_20px_rgba(4,154,137,0.4)] z-20 ${item.position === "top"
                                        ? "-top-40"  // Closer to bar
                                        : "top-20"   // Closer to bar
                                        }`}>
                                        <item.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className={`absolute w-64 text-sm font-medium text-white/90 ${item.position === "top"
                                        ? "bottom-[13rem]" // Adjusted for new icon pos
                                        : "top-[13rem]"    // Adjusted for new icon pos
                                        }`}>
                                        <ul className="space-y-2">
                                            {item.points.map((point, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#049A89] mt-1.5 shrink-0 shadow-[0_0_8px_#049A89]"></span>
                                                    <span className="leading-tight">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {/* --- MOBILE/TABLET VIEW (Vertical Timeline) --- */}
            <div className="lg:hidden relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#aeece6] via-[#049a89] to-[#025c52]"></div>

                <div className="space-y-12 pb-12 pl-4">
                    {journeyData.map((item, index) => (
                        <div key={index} className="relative pl-12">
                            {/* Year Bubble/Icon */}
                            <div className={`absolute left-0 top-0 w-12 h-12 -ml-[2px] rounded-full border-4 border-slate-900 flex items-center justify-center z-10 ${item.color}`}>
                                <item.icon className="w-5 h-5 text-white" />
                            </div>

                            {/* Content Card */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
                                <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold text-white mb-4 ${item.color}`}>
                                    {item.year}
                                </div>
                                <ul className="space-y-3">
                                    {item.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#049A89] mt-2 shrink-0"></span>
                                            <span className="text-gray-300 text-sm">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
