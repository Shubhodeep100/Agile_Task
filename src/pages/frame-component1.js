import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./frame-component1.module.css";

const FrameComponent1 = ({ onClose }) => {
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
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.expandedJourneyBoardParent} data-animate-on-scroll>
      <div className={styles.expandedJourneyBoard} data-animate-on-scroll>
        <div className={styles.expandedJourneyBoardChild} />
        <div className={styles.expandedJourneyBoardItem} />
        <div className={styles.expandedJourneyBoardInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.expandedJourneyBoardChild1} />
        <div className={styles.expandedJourneyBoardChild2} />
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <img className={styles.groupItem} alt="" src="/ellipse-53@2x.png" />
          <img className={styles.groupInner} alt="" src="/ellipse-1.svg" />
          <img className={styles.ellipseIcon} alt="" src="/ellipse-2.svg" />
          <img className={styles.groupChild1} alt="" src="/ellipse-3.svg" />
          <img className={styles.groupChild2} alt="" src="/ellipse-56.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.groupChild3} alt="" src="/ellipse-55.svg" />
          <img className={styles.logo1Icon} alt="" src="/logo-11.svg" />
          <div className={styles.groupParent}>
            <img className={styles.groupIcon} alt="" src="/group-1098.svg" />
            <div className={styles.tools}>tools</div>
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.groupIcon} alt="" src="/group-1098.svg" />
            <div className={styles.div}></div>
          </div>
        </div>
        <b className={styles.technicalProjectManagement}>
          Technical Project Management
        </b>
        <div className={styles.expandedJourneyBoardChild3} />
        <div className={styles.expandedJourneyBoardChild4} />
        <div className={styles.expandedJourneyBoardChild5} />
        <div className={styles.expandedJourneyBoardChild6} />
        <div className={styles.expandedJourneyBoardChild7} />
        <div className={styles.exploreTheWorldOfManagemenParent}>
          <b className={styles.exploreTheWorld}>
            Explore the world of management
          </b>
          <div className={styles.asAProject}>
            As a project manager, you play an important reole in leading a
            project through initiation, planning, execution, monitoring,
            controlling and completion. How? Do you want to manage each and
            every step of your life?
          </div>
        </div>
        <div className={styles.expandedJourneyBoardChild8} />
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
        <div className={styles.title}>{`Title `}</div>
        <div className={styles.content}>Content</div>
        <div className={styles.expandedJourneyBoardChild9} />
        <div className={styles.expandedJourneyBoardChild10} />
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
          src="/arrowcurveleftdown1.svg"
        />
        <img
          className={styles.arrowCurveLeftRightIcon}
          alt=""
          src="/arrowcurveleftright1.svg"
        />
        <div className={styles.technicalProjectManagement1}>
          Technical Project Management
        </div>
        <div className={styles.structureYourPointers}>
          Structure your Pointers
        </div>
        <div className={styles.expandedJourneyBoardChild11} />
        <div className={styles.paragraph}>Paragraph</div>
        <div className={styles.threadbuild}>Threadbuild</div>
        <div className={styles.expandedJourneyBoardChild12} />
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
          <div className={styles.groupChild5} />
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
          className={styles.expandedJourneyBoardChild13}
          alt=""
          src="/ellipse-195.svg"
        />
        <img
          className={styles.expandedJourneyBoardChild14}
          alt=""
          src="/ellipse-195.svg"
        />
        <img
          className={styles.expandedJourneyBoardChild15}
          alt=""
          src="/ellipse-195.svg"
        />
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild6} />
          <div className={styles.selectProcess}>Select Process</div>
          <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
        </div>
        <img
          className={styles.expandedJourneyBoardChild16}
          alt=""
          src="/group-1588.svg"
        />
        <div className={styles.expandedJourneyBoardInner1}>
          <div className={styles.bgLayerParent}>
            <div className={styles.bgLayer3} />
            <div className={styles.bgLayer4}>
              <div className={styles.bgLayer2} />
            </div>
            <div className={styles.enterTextHere1}>Enter Text here</div>
            <div className={styles.subThread1}>Sub thread 1</div>
          </div>
        </div>
        <div className={styles.expandedJourneyBoardInner2}>
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
          <div className={styles.groupChild6} />
          <div className={styles.selectCateg}>Select Categ</div>
          <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
        </div>
        <div className={styles.expandedJourneyBoardChild17} />
        <img
          className={styles.arrowExpand02Icon}
          alt=""
          src="/arrowexpand021.svg"
        />
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild6} />
          <div className={styles.selectCateg}>Select Proces</div>
          <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
        </div>
        <div className={styles.introduction}>{`Introduction `}</div>
        <div className={styles.expandedJourneyBoardChild18} />
        <div className={styles.expandedJourneyBoardChild19} />
        <img className={styles.vectorIcon6} alt="" src="/vector2.svg" />
        <div className={styles.threadA1}>Thread A</div>
        <div className={styles.example1}>Example 1</div>
        <div className={styles.component57}>
          <div className={styles.component57Child} />
          <div className={styles.parent}>
            <div className={styles.div1}>+</div>
            <div className={styles.subThread}>Sub-thread</div>
          </div>
        </div>
        <div className={styles.expandedJourneyBoardChild20} />
        <div className={styles.expandedJourneyBoardChild21} />
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
          className={styles.expandedJourneyBoardChild22}
          alt=""
          src="/ellipse-198.svg"
        />
        <img
          className={styles.expandedJourneyBoardChild23}
          alt=""
          src="/ellipse-198.svg"
        />
        <img
          className={styles.expandedJourneyBoardChild24}
          alt=""
          src="/ellipse-198.svg"
        />
        <div className={styles.ellipseGroup}>
          <img className={styles.groupChild9} alt="" src="/ellipse-201.svg" />
          <div className={styles.i1}>i</div>
        </div>
        <div className={styles.ellipseContainer}>
          <img className={styles.groupChild9} alt="" src="/ellipse-201.svg" />
          <div className={styles.i1}>i</div>
        </div>
        <div className={styles.ellipseParent1}>
          <img className={styles.groupChild9} alt="" src="/ellipse-201.svg" />
          <div className={styles.i1}>i</div>
        </div>
        <img
          className={styles.questionMark21}
          alt=""
          src="/questionmark-2-1@2x.png"
        />
        <div className={styles.ellipseParent2}>
          <img className={styles.groupChild9} alt="" src="/ellipse-201.svg" />
          <div className={styles.i1}>i</div>
        </div>
        <img className={styles.meeting1Icon} alt="" src="/meeting-1@2x.png" />
        <img className={styles.schedule11} alt="" src="/schedule-1-1@2x.png" />
        <div className={styles.div2}>1</div>
        <div className={styles.expandedJourneyBoardChild25} />
        <div className={styles.expandedJourneyBoardChild26} />
        <div className={styles.journeyBoard}>Journey Board</div>
        <div className={styles.exploreTheWorldContainer}>
          <ul className={styles.exploreTheWorld1}>
            Explore the world of management
          </ul>
        </div>
        <div className={styles.technicalProjectManagementContainer}>
          <ul className={styles.exploreTheWorld1}>
            <li className={styles.technicalProjectManagement3}>
              {" "}
              Technical Project Management
            </li>
            <li className={styles.technicalProjectManagement3}> Threadbuild</li>
            <li className={styles.technicalProjectManagement3}>
              {" "}
              Structure your pointers
            </li>
            <li> 4SA Method</li>
          </ul>
        </div>
        <Link className={styles.groupA} to="/" onClick={onGroupLinkClick}>
          <img className={styles.groupChild13} alt="" src="/ellipse-203.svg" />
          <img className={styles.arrowIcon} alt="" src="/arrow-2.svg" />
        </Link>
      </div>
    </div>
  );
};

export default FrameComponent1;
