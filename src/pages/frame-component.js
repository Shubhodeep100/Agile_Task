import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./frame-component.module.css";

const FrameComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onGroupLinkClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  return (
    <div className={styles.collapsedJourneyBoardParent}>
      <div className={styles.collapsedJourneyBoard} data-animate-on-scroll>
        <div className={styles.collapsedJourneyBoardChild} />
        <div className={styles.collapsedJourneyBoardItem} />
        <div className={styles.collapsedJourneyBoardInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.collapsedJourneyBoardChild1} />
        <div className={styles.collapsedJourneyBoardChild2} />
        <nav className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <img className={styles.groupItem} alt="" src="/ellipse-53@2x.png" />
          <img className={styles.groupInner} alt="" src="/ellipse-1.svg" />
          <img className={styles.ellipseIcon} alt="" src="/ellipse-2.svg" />
          <img className={styles.groupChild1} alt="" src="/ellipse-3.svg" />
          <img className={styles.groupChild2} alt="" src="/ellipse-56.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.groupChild3} alt="" src="/ellipse-55.svg" />
          <img className={styles.logo1Icon} alt="" src="/logo-1.svg" />
          <div className={styles.groupParent}>
            <img className={styles.groupIcon} alt="" src="/group-1098.svg" />
            <div className={styles.tools}>tools</div>
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.groupIcon} alt="" src="/group-1098.svg" />
            <div className={styles.div}></div>
          </div>
        </nav>
        <h2 className={styles.technicalProjectManagement}>
          Technical Project Management
        </h2>
        <div className={styles.collapsedJourneyBoardChild3} />
        <div className={styles.collapsedJourneyBoardChild4} />
        <div className={styles.collapsedJourneyBoardChild5} />
        <div className={styles.collapsedJourneyBoardChild6} />
        <textarea className={styles.rectangleTextarea} />
        <textarea className={styles.groupTextarea} readOnly />
        <div className={styles.collapsedJourneyBoardChild7} />
        <div className={styles.descriptionWriteContainer}>
          <span className={styles.description}>
            <span>{`Description `}</span>
            <span className={styles.span}>:</span>
          </span>
          <span className={styles.writeA300400WordArticle}>
            <span className={styles.span1}>{` `}</span>
            <span>{`Write a 300 - 400 word article from your thread . Publish your understanding and showcase your understanding to the entire world `}</span>
          </span>
        </div>
        <div className={styles.descriptionToContainer}>
          <span className={styles.description}>
            <span>{`Description `}</span>
            <span className={styles.span}>:</span>
          </span>
          <span className={styles.writeA300400WordArticle}>
            <span className={styles.span1}>{` `}</span>
            <span>{`To Explore more read more `}</span>
          </span>
        </div>
        <div className={styles.collapsedJourneyBoardChild8} />
        <section className={styles.rectangleSection} />
        <aside className={styles.rectangleAside} />
        <aside className={styles.rectangleAside} />
        <aside className={styles.rectangleAside} />
        <aside className={styles.rectangleAside} />
        <Link
          className={styles.ellipseGroup}
          to="/frame-2"
          onClick={onGroupLinkClick}
        >
          <img className={styles.groupChild5} alt="" src="/ellipse-202.svg" />
          <img className={styles.arrowIcon} alt="" src="/arrow-1.svg" />
        </Link>
        <div className={styles.title}>{`Title `}</div>
        <div className={styles.content}>Content</div>
        <div className={styles.collapsedJourneyBoardChild12} />
        <div className={styles.collapsedJourneyBoardChild13} />
        <div className={styles.collapsedJourneyBoardChild14} />
        <div className={styles.div1}>1</div>
        <div className={styles.descriptionStoryOfContainer}>
          <span className={styles.description}>Description</span>
          <span className={styles.span4}>
            <span>:</span>
          </span>
          <span className={styles.writeA300400WordArticle}>
            <span className={styles.span4}>{` `}</span>
            <span>
              Story of Alignment Scope of Agility Specific Accountable
              Staggering Approach
            </span>
          </span>
        </div>
        <div className={styles.file}>File</div>
        <div className={styles.edit}>Edit</div>
        <div className={styles.view}>View</div>
        <div className={styles.insert}>Insert</div>
        <div className={styles.format}>Format</div>
        <div className={styles.tools1}>Tools</div>
        <div className={styles.table}>Table</div>
        <div className={styles.help}>Help</div>
        <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
        <img
          className={styles.arrowCurveLeftDownIcon}
          alt=""
          src="/arrowcurveleftdown.svg"
        />
        <img
          className={styles.arrowCurveLeftRightIcon}
          alt=""
          src="/arrowcurveleftright.svg"
        />
        <div className={styles.technicalProjectManagement1}>
          Technical Project Management
        </div>
        <div className={styles.structureYourPointers}>
          Structure your Pointers
        </div>
        <div className={styles.collapsedJourneyBoardChild15} />
        <div className={styles.paragraph}>Paragraph</div>
        <div className={styles.threadbuild}>Threadbuild</div>
        <div className={styles.collapsedJourneyBoardChild16} />
        <div className={styles.descriptionWatchTheContainer}>
          <span className={styles.description}>Description</span>
          <span className={styles.span4}>
            <span>:</span>
          </span>
          <span className={styles.writeA300400WordArticle}>
            <span className={styles.span4}>{` `}</span>
            <span>
              Watch the video and threadbuild, and jot out key threads while
              watching the video
            </span>
          </span>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild6} />
          <b className={styles.threadA}>Thread A</b>
        </div>
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
        <div className={styles.groupDiv}>
          <div className={styles.bgLayerParent}>
            <div className={styles.bgLayer} />
            <div className={styles.bgLayer1}>
              <div className={styles.bgLayer2} />
            </div>
            <div className={styles.summaryForThread}>Summary for Thread A</div>
            <div className={styles.enterTextHere}>Enter Text Here</div>
          </div>
        </div>
        <img
          className={styles.collapsedJourneyBoardChild17}
          alt=""
          src="/ellipse-195.svg"
        />
        <img
          className={styles.collapsedJourneyBoardChild18}
          alt=""
          src="/ellipse-195.svg"
        />
        <img
          className={styles.collapsedJourneyBoardChild19}
          alt=""
          src="/ellipse-195.svg"
        />
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild7} />
          <div className={styles.selectProcess}>Select Process</div>
          <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
        </div>
        <img
          className={styles.collapsedJourneyBoardChild20}
          alt=""
          src="/group-1588.svg"
        />
        <div className={styles.collapsedJourneyBoardInner1}>
          <div className={styles.bgLayerParent}>
            <div className={styles.bgLayer3} />
            <div className={styles.bgLayer4}>
              <div className={styles.bgLayer2} />
            </div>
            <div className={styles.enterTextHere1}>Enter Text here</div>
            <div className={styles.subThread1}>Sub thread 1</div>
          </div>
        </div>
        <div className={styles.collapsedJourneyBoardInner2}>
          <div className={styles.bgLayerParent}>
            <div className={styles.bgLayer3} />
            <div className={styles.bgLayer7}>
              <div className={styles.bgLayer2} />
            </div>
            <div className={styles.subInterpretation1}>
              Sub Interpretation 1
            </div>
            <div className={styles.enterTextHere2}>Enter Text here</div>
          </div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild7} />
          <div className={styles.selectCateg}>Select Categ</div>
          <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
        </div>
        <div className={styles.collapsedJourneyBoardChild21} />
        <img
          className={styles.arrowExpand02Icon}
          alt=""
          src="/arrowexpand02.svg"
        />
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild7} />
          <div className={styles.selectCateg}>Select Proces</div>
          <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
        </div>
        <div className={styles.introduction}>{`Introduction `}</div>
        <div className={styles.collapsedJourneyBoardChild22} />
        <div className={styles.collapsedJourneyBoardChild23} />
        <img className={styles.vectorIcon6} alt="" src="/vector2.svg" />
        <div className={styles.threadA1}>Thread A</div>
        <div className={styles.example1}>Example 1</div>
        <div className={styles.component57}>
          <div className={styles.component57Child} />
          <div className={styles.parent}>
            <div className={styles.div2}>+</div>
            <div className={styles.subThread}>Sub-thread</div>
          </div>
        </div>
        <div className={styles.collapsedJourneyBoardChild24} />
        <div className={styles.collapsedJourneyBoardChild25} />
        <div className={styles.nOTContainer}>
          <p className={styles.n}>N</p>
          <p className={styles.n}>o</p>
          <p className={styles.n}>t</p>
          <p className={styles.n}>i</p>
          <p className={styles.n}>c</p>
          <p className={styles.n}>e</p>
          <p className={styles.n}>&nbsp;</p>
          <p className={styles.n}>B</p>
          <p className={styles.n}>o</p>
          <p className={styles.n}>a</p>
          <p className={styles.n}>r</p>
          <p className={styles.n}>d</p>
        </div>
        <div className={styles.the4saMethod}>
          The 4SA Method , How to bring a idea into progress ?
        </div>
        <div className={styles.youHaveA}>
          You have a concept , How will you put into progress?
        </div>
        <div className={styles.seeMore}>See More</div>
        <div className={styles.seeMore1}>See More</div>
        <img className={styles.x01Icon} alt="" src="/x01.svg" />
        <div className={styles.component58}>
          <div className={styles.component57Child} />
          <div className={styles.submitTaskWrapper}>
            <div className={styles.submitTask}>Submit task</div>
          </div>
        </div>
        <div className={styles.howAreYou}>
          How are you going to develop your stratergy ? Which method are you
          going to use to develop a stratergy ? What if the project is lengthy?
        </div>
        <div className={styles.saMethod}>4SA Method</div>
        <img
          className={styles.collapsedJourneyBoardChild26}
          alt=""
          src="/ellipse-198.svg"
        />
        <img
          className={styles.collapsedJourneyBoardChild27}
          alt=""
          src="/ellipse-198.svg"
        />
        <img
          className={styles.collapsedJourneyBoardChild28}
          alt=""
          src="/ellipse-198.svg"
        />
        <div className={styles.ellipseContainer}>
          <img className={styles.groupChild10} alt="" src="/ellipse-201.svg" />
          <div className={styles.i1}>i</div>
        </div>
        <div className={styles.ellipseParent1}>
          <img className={styles.groupChild10} alt="" src="/ellipse-201.svg" />
          <div className={styles.i1}>i</div>
        </div>
        <div className={styles.ellipseParent2}>
          <img className={styles.groupChild10} alt="" src="/ellipse-201.svg" />
          <div className={styles.i1}>i</div>
        </div>
        <img
          className={styles.questionMark21}
          alt=""
          src="/questionmark-2-1@2x.png"
        />
        <div className={styles.ellipseParent3}>
          <img className={styles.groupChild10} alt="" src="/ellipse-201.svg" />
          <div className={styles.i1}>i</div>
        </div>
        <img className={styles.meeting1Icon} alt="" src="/meeting-1@2x.png" />
        <img className={styles.schedule11} alt="" src="/schedule-1-1@2x.png" />
      </div>
    </div>
  );
};

export default FrameComponent;
