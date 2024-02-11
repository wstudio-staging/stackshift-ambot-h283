import React from "react";

import { HowItWorksProps } from ".";
import { Text } from "components/ui/Text";

function VariantA({ subtitle, title, text, video, steps }: HowItWorksProps) {
  // get the video link ID
  let videoLinkId;

  if (video) {
    if (video.includes("embed")) {
      videoLinkId = video.split("/")[4];
    } else {
      videoLinkId = video.split("/watch?v=")[1] || video.split("/")[3];
    }
  }

  return (
    <section>
      <div className="py-20 radius-for-skewed bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap mb-10">
            <div className="w-full mb-10 lg:mb-0 lg:w-1/2">
              <div className="max-w-lg mx-10">
                <span className="text-sm font-bold text-webriq-darkblue md:text-lg lg:text-lg">
                  {subtitle}
                </span>
                <Text className="my-5">{title}</Text>
                <p className="text-sm text-gray-500 md:text-lg md:leading-loose lg:text-lg lg:leading-loose">
                  {text}
                </p>
              </div>
            </div>
            <div className="relative w-full px-10 lg:h-128 md:h-96 md:w-2/5 md:px-0 lg:w-2/5 lg:px-0">
              {video && (
                <iframe
                  aria-label="Show Video Frame"
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${videoLinkId}`}
                  srcDoc={`<style>*{padding:0;margin:0;overflow:hidden;border-radius:8px}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${`https://www.youtube.com/embed/${videoLinkId}`}><img src=${`https://i.ytimg.com/vi_webp/${videoLinkId}/maxresdefault.webp`} alt=${title} loading="lazy" /><span>▶</span></a>`}
                  frameBorder="0"
                  loading="lazy"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              )}
            </div>
          </div>

          <div className="flex flex-wrap px-10">
            {steps &&
              steps?.map((step, index) => (
                <div
                  className="w-full px-5 mb-12 md:w-1/2 lg:mb-0 lg:w-1/3"
                  key={index}
                >
                  <span className="flex items-center justify-center w-12 h-12 mt-6 mb-6 font-bold rounded bg-webriq-lightblue text-webriq-darkblue">
                    {index + 1}
                  </span>
                  <p className="mb-2 text-lg font-bold font-heading md:text-2xl lg:text-2xl">
                    {step?.title}
                  </p>
                  <p className="text-xs text-gray-500 md:text-lg md:leading-loose lg:text-lg lg:leading-loose">
                    {step?.plainText}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default React.memo(VariantA);
