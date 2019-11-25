import React, { Component } from 'react';
import scrollTo from '../App/ScrollToTopOnMount';
import './About.css';

class About extends Component {
  componentDidMount() {
    if (this.props.match.params.scroll) {
      this.scrollToAnchor(this.props.match.params.scroll);
    }
  }

  componentDidUpdate() {
    if (this.props.match.params.scroll) {
      this.scrollToAnchor(this.props.match.params.scroll);
    }
  }

  scrollToAnchor(anchor) {
    this.props.scrollTo(anchor);
  }

  render() {
    return (
      <div id="content">
        <h1>
          <a name="skills" href="#/about/skills">
            Skills
          </a>
        </h1>
        <img
          className="home_portrait"
          src="images/mouse.jpg"
          alt="mouse illustrator"
          width="180"
          height="211"
          border="0"
        />
        <h2>Art Direction:</h2>
        <p>
          hire/fire freelance illustrators and designers; work with project managers/editors to ensure that projects are
          completed on time and within budget; supervise pre-press production including scans, color-correction, layout,
          cover design and typesetting; coordinate with printers and attend press-checks
        </p>
        <h2>Design:</h2>
        <p>
          coordinate with project managers and editors to create book covers and interior layouts for both fiction and
          non-fiction books that are visually stunning, age-appropriate and that will stand out in the retail
          environment; create book series that work well together yet are appealing on an individual basis; make sure
          all specs are met with regard to proper spine widths, bar-codes and title placement; review proofs before
          final press runs
        </p>
        <h2>Illustration:</h2>
        <p>
          work with product managers to ensure that illustrations are created in a style appropriate for the age of the
          reader and that will be appealing on the final product; techniques used: mixed media (water-color, gouache &
          colored pencil), oil, brush & ink, pen & ink, cut-paper collage, digital illustration using Macintosh computer
        </p>
        <h2>Writing:</h2>
        <p>
          design art projects for children, mazes, rebuses, hidden pictures, stories and poems for children, published
          books on drawing, painting, sculpture and multimedia for children, contribute ideas for new product
          development
        </p>
        <h2>Software:</h2>
        <p>
          graphics applications: Adobe InDesign, Photoshop, Illustrator, QuarkXPress, Fractal Painter, Macromedia
          Director, DeBabelizer, Adobe Dimensions, Adobe Streamline, Barcode Pro, FTP protocols/Fetch
        </p>
        <h1>
          <a name="experience" href="#/about/experience">
            Experience
          </a>
        </h1>
        <h2>Freelance Art Director, designer and illustrator 1990-present</h2>
        <h3>Darcy Bell-Myers Illustration & Design</h3>
        <p>
          I have been a freelance illustrator and graphic designer for many years now, specializing in illustration for
          children, including educational and editorial illustration. I have worked on a variety of projects both
          fiction and non-fiction including illustrated storybooks, early readers, bookcovers, magazine covers and
          interior illustrations, stickers, bulletin board trimmers, post-cards, games, puzzles, animated cartoons,
          educational software and much more! In addition I have worked as an animator and college instructor through
          the years which has helped to round-out my experience and give me added insight and expertise in these areas.
          Some of my clients include; Instructional Fair, McGraw Hill, The Meadowbrook Press, Abrams/Learning Trends,
          Carson Dellosa, VoWac Publishing, Attitude Press, Family Times/Senior Times/Grandparent Times/BabyTimes,
          Minnesota Monthly, MInnesota Parent, Minnesota Medicine, Twin Cities Parent and City Pages
        </p>
        <h2>Art Director:</h2>
        <h3>Instructional Fair / TS Denison &Co., 1992-2000</h3>
        <p>
          I started with this company when it was a small business producing primarily books for the supplemental
          educational market and grew with it as it tripled the amount of products released each year and stretched into
          the mainstream market. I worked on a variety of projects from initial conceptualization to finished product.
          My input in the process began with coming up with ideas, titles and budgets for projects; I then worked
          creating layouts, illustrations, and graphic design, hired and supervised other artists, designers and
          computer programmers as needed; and finished with the supervision of film-production and press-checks. I
          gained a firm foundation in this job that serves me well to this day.
        </p>
        <h2>College Art Instructor:</h2>
        <h3>Minneapolis College of Art and Design, Graphic Arts Instructor 1995-1996</h3>
        <p>
          I taught a class entitled "Professional Practices" in my downtime. It was a class for senior illustration and
          graphics students designed to help them with the daily challenges of being a graphic artist. I gave them
          real-life projects such as those they might be assigned at a publisher, with a focus on showing portfolios,
          communicating with art directors, creating intelligent pencil sketches and the intricacies of faxing,
          invoicing and creative problem-solving.
        </p>
        <h2>Animator:</h2>
        <h3>Mike Jones Film Corp. Animator, Animation Supervisor 1989-1992</h3>
        <p>
          I worked directly under the authority of Mike Jones to train & supervise assistant animators, animated short
          sequences for television commercials, and participated in the conceptualization of character designs and story
          boards for clients such as Levi�s and Best Buy. I aided in the post production transfer of animation from film
          to video, in ink and painting of cels as well as produced background art.
        </p>
        <h2>Graphic Designer:</h2>
        <h3>Sue Stavig Design, Design Asst. / Paste-Up, 1988-1989</h3>
        <p>
          I Prepared camera-ready art for catalogs. My duties included meeting with clients, typesetters and writers
          daily, as well as producing detailed paste-ups, shooting stats, cutting amber-lith overlays and specifying
          type.
        </p>
        <h1>
          <a name="education" href="#/about/education">
            Education
          </a>
        </h1>
        <h2>Minneapolis College of Art & Design</h2>
        BFA in Visual Communication, Graduated with honors 1989. Dean's List 1987 - 1989
        <h2>State University of New York at Purchase</h2>
        Fine Art training, 1985 - 1987. Dean's List 1985 - 1987
        <h2>New York City, NY, F.I.T., 1990</h2>
        Society of Illustrators Symposium
        <h2>Hagen MicroAge</h2>
        Classes in Quark, Illustrator and Photoshop, Tutorial in Director
        <p></p>
        <h1>
          <a name="awards" href="#/about/awards">
            Awards
          </a>
        </h1>
        <ul>
          <li>
            Minnesota Fringe Festival - "Higgledy Piggledy" adapted and performed at Theatre de la Jeune Leune 2007
          </li>
          <li>Winner Best Picture Book, San Diego Book Awards "Higgledy Piggledy", illustration Attitude Press 2006</li>
          <li>Small Press Bookwatch Reviewer's Choice - "Higgledy Piggledy", illustration Attitude Press 2006</li>
          <li>
            Educational Dealer's Parent's Choice Award for "Young Minds at Play", Art Direction 1997 Instructional
            Fair/TS Denison
          </li>
          <li>
            National Library Association Award for Library Skills Series of 5 books I designed and illustrated, 1995 TS
            Denison
          </li>
          <li>Dr. Toy Award - "Quick Games From Trash", Art Direction Instructional Fair/TS Denison</li>
          <li>
            Parents Choice Award - "Art for the Very Young" Art Direction, illustration, design & concept Instructional
            Fair/TS Denison
          </li>
        </ul>
        <p>Winner, Hamlin Playground Design Competition, St. Paul, 1988</p>
        <p>Art in the Workplace I & II, Show Target Headquarters, 1989 & 1990</p>
        <p>Honorable Mention, Merit Scholarship Competition, MCAD</p>
        <p>
          Member of the{' '}
          <a href="https://www.scbwi.org/members-public/darcy-bell-myers">
            Society of Children's Book Writers and Illustrators
          </a>
        </p>
      </div>
    );
  }
}

export default scrollTo(About);
