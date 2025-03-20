import React from 'react';
import { MdBusinessCenter } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const workIcon = {
  icon: <MdBusinessCenter />,
  iconStyle: { background: 'rgb(42, 151, 139)', color: '#fff' },
};

const starIcon = {
  icon: <AiFillStar />,
  iconStyle: { background: '#bb3459', color: '#fff' },
};

const timeline = [
  {
    icon: workIcon,
    date: '',
    title: '',
    subtitle: '',
    desc: [],
  },
  { icon: starIcon },
];

const WorkExperience = () => {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <span className="text-3xl font-medium tracking-wide text-teal-700">Experiences</span>
      <article className="w-full p-8">
        <VerticalTimeline lineColor="rgb(42, 151, 139)" layout="2-columns">
          {timeline.map((t, i) => {
            const contentStyle = i !== timeline.length - 1 ? { border: '2px solid rgb(42, 151, 139)', color: 'rgb(28, 54, 54)' } : undefined;
            const arrowStyle = i !== timeline.length - 1 ? { borderRight: '7px solid rgb(42, 151, 139)' } : undefined;

            return (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                contentStyle={contentStyle}
                contentArrowStyle={arrowStyle}
                {...t.icon}
              >
                {t.title && (
                  <>
                    <div className="text-lg font-semibold">{t.title}</div>
                    {t.subtitle && <div className="text-sm font-medium mt-1">{t.subtitle}</div>}
                    {t.desc && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {t.desc.map((item, index) => (
                          <div key={index} className="text-xs font-medium py-2 px-4 border border-teal-800 rounded-full">
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                    {t.date && <div className="text-sm font-medium mt-5">{t.date}</div>}
                  </>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </article>
    </div>
  );
};

export default WorkExperience;
