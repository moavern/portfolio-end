import React from "react";
import {
  HeroSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Mohammed Chauhan's Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
      </Page>
    </>
  );
}


/*AboutSection,
//ArticlesSection,
ContactSection,
InterestsSection,
ProjectsSection
*/
