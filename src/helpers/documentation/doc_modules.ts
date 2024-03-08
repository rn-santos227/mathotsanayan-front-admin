const docs: string[] = [
  `The Modules Manager Page in MatHOTSanayan acts as a central hub,
  providing administrators with a comprehensive set of tools to
  efficiently oversee and manage assessment modules. This pivotal control
  center streamlines essential tasks, offering a comprehensive suite of
  features for creating, updating, activating, and deleting modules. From
  the inception of a new module to its eventual deactivation or deletion,
  every aspect is meticulously covered, empowering administrators with the
  control they need.`,

  `Beyond module creation, the Modules Manager page presents a clear list
  of all available modules, each distinctly identified by its title. This
  layout enables administrators to quickly identify the module they wish
  to access. Alongside each module title, administrators can find
  pertinent information regarding the number of test items contained
  within, providing valuable insight into the depth and breadth of each
  module's content.`,

  `Furthermore, modules are systematically categorized according to their
  respective subjects, facilitating efficient navigation for
  administrators seeking content relevant to specific academic
  disciplines. This categorization ensures seamless access to the
  appropriate materials.`,

  `Additionally, intuitive action buttons are provided for each listed
  module, enabling administrators to effortlessly access the test
  questions within and update the module as needed. These action buttons
  provide direct access to the test questions, simplifying the process of
  reviewing and exploring the content of each module in detail. Moreover,
  they enable administrators to promptly update modules by activating or
  deactivating them as necessary.`,

  `The Module Filter Search feature in MatHOTSanayan introduces a versatile
  and efficient solution for administrators to precisely locate modules
  based on various criteria. This feature enables administrators to
  optimize their workflow by searching for modules according to three
  primary parameters: module title, subject, or keywords within the
  module's description.`,

  `With the search by module title option, administrators can quickly
  locate a particular module by typing its title directly into the search
  bar. This targeted approach ensures efficient access to specific
  assessments, saving valuable time and enhancing overall navigation.`,

  `Similarly, the search by subject feature allows for the effortless
  categorization of modules. Administrators can filter modules based on
  their designated subject.`,

  `Moreover, the search by keywords within the module's description
  enhances the search process with increased precision. This functionality
  allows administrators to locate modules based on specific keywords
  present in their descriptions, offering a more refined and tailored
  approach to information retrieval.`,

  `Effortlessly launch the creation of new assessment modules within
  MatHOTSanayan by accessing the "Create Module" section. This intuitive
  interface facilitates a seamless experience, for administrators tasked
  with crafting comprehensive assessments. Upon entering this section,
  administrators encounter a user-friendly interface featuring fields such
  as the module title, module stage, passing rate, subject, description,
  objective, and instructions.`,

  `Begin the module creation process by specifying the module title,
  servings as a distinct title for the assessment. This clear and
  identifiable name enhances organization and clarity within the
  MatHOTSanayan system, ensuring administrators can easily distinguish
  between various modules.`,

  `As administrators enter module details, the module stage field plays a
  pivotal role. This feature functions as a stage-setting tool, it
  dictates the accessibility of the module for students. By setting it to
  stage 1, the module becomes instantly accessible to students.
  Alternatively, by adjusting the module stage to 2 or higher establishes
  a sequential progression, ensuring students can only access the module
  upon reaching the designated stage.`,

  `Utilizing the passing rate slider, administrators have the flexibility
  to set the passing rate for the exam on a scale ranging from 0% to 100%.
  This dynamic feature customizes assessments to meet the precise grading
  standards of the institution, offering adaptability in line with
  educational goals.`,

  `Furthermore, administrators can f enrich the module by furnishing
  additional information through the module description, objective, and
  instructions fields. These components offer a comprehensive overview of
  the module's content, objective, and precise instructions tailored for
  administrators, teachers, and students alike. By leveraging these
  fields, administrators can ensure clarity and coherence in conveying the
  purpose and expectations of the module, facilitating seamless engagement
  and understanding for all stakeholders involved.`,

  `Refine and update existing assessment modules within MatHOTSanayan
  through the "Update" option. This streamlined process provides
  administrators with a user-friendly interface to make necessary
  adjustments to module details. By accessing this option, administrators
  can easily modify parameters such as the module title, subject, passing
  rate, and other essential details. Once the modifications are made,
  simply save the changes by clicking submit, ensuring that the module
  information remains up-to-date and accurate.`,

  `Furthermore, the Modules Manager Page in MatHOTSanayan introduces a
  dynamic activation feature that empowers administrators to activate or
  deactivate modules based on specific scheduling needs. This
  functionality offers strategic control over the availability of
  assessments within the system. By toggling the activation status of
  modules, administrators can precisely manage the timing of assessments,
  ensuring that they align with the academic calendar and institutional
  requirements. This flexible approach enables administrators to
  orchestrate the assessment environment with precision, enhancing overall
  control and efficiency in the administration of exams.`,

  `Simplify the streamlining of your assessment system within MatHOTSanayan
  by effortlessly eliminating redundant modules through a straightforward
  deletion process. This userfriendly feature optimizes module management,
  guaranteeing a hassle-free experience for administrators. To begin,
  administrators can effortlessly select the module they wish to remove,
  initiating the deletion process. Once the target module is chosen, a
  confirmation prompt ensures deliberate actions, effectively reducing the
  possibility of accidental deletions. With a simple click to confirm, the
  selected module is effortlessly eliminated, facilitating a system
  cleanup that caters to the evolving needs of the educational
  institution.`,

  `It is important to note that the deletion function is designed with a
  failsafe mechanism — a module can only be deleted if it contains no
  questions. This built-in safeguard ensures the integrity of the
  assessment data and prevents unintentional data loss. This intentional
  design choice prioritizes data accuracy and helps administrators
  maintain a well-organized and error-free assessment environment. By
  incorporating this precaution, MatHOTSanayan ensures a secure and
  controlled deletion process, reinforcing the commitment to precision and
  reliability in module management.`,

  `In conclusion, the Question Management Page serves as a central hub for
  administrators, streamlining the process of managing and customizing
  assessment questions. Its user-friendly interface, coupled with detailed
  column descriptions, ensures transparency and efficiency in question
  administration within MatHotSanayan. This comprehensive feature reflects
  the commitment to providing a robust platform that facilitates precise
  and diverse assessment content customization for educational
  institutions.`,

  `Accessing the "Create Questions" section within the Question Management
  Page in MatHOTSanayanmarks the inception of a streamlined process for
  incorporating new questions into assessments. This dedicated section
  offers administrators an intuitive and user-friendly interface designed
  to simplify the customization of assessment content. Within this
  environment, administrators can seamlessly input the question text,
  provide multiple-choice answers, and designate the correct solution,
  fostering a dynamic approach to question creation.`,

  `Furthermore, the "Create Questions" section supports the efficient
  addition of multiple questions, each with distinct complexities.
  Administrators have the flexibility to create questions with multiple
  correct answers and multiple options, catering to the diverse nature of
  assessments. The "Word Questions" type permits the creation of questions
  where administrators can specify multiple correct answers, yet no
  solution is provided, allowing students to input their responses. The
  "Multiple Selection" type empowers administrators to add questions with
  multiple correct answers and multiple options, offering a comprehensive
  approach to capturing nuanced understanding. Meanwhile, the "Single
  Correct" type enables administrators to craft questions with multiple
  options but only one correct answer, streamlining the process of
  generating various question formats to suit the educational
  institution's assessment goals.`,

  `This multifaceted functionality not only enhances the efficiency of the
  question creation process but also ensures that administrators have the
  tools needed to tailor assessments according to their specific
  requirements within the MatHOTSanayanecosystem. The user-friendly
  interface, coupled with the diverse question types, exemplifies the
  platform's commitment to providing a robust and adaptable environment
  for effective question management.`,

  `Administrators wield the power to seamlessly refine existing questions
  through the "Update" option within the Question Management Page of
  MatHotSanayan. This focused functionality enables precise modifications
  limited to essential elements such as question type, question content,
  and question image. By offering this streamlined approach,
  administrators can ensure that the assessment content remains aligned
  with evolving educational objectives, allowing for dynamic adjustments
  to cater to the institution's changing needs.`,

  `Accessing the "Update" option presents administrators with an interface
  designed for efficiency. The flexibility to modify question types
  accommodates changes in assessment structures, adapting to the diverse
  nature of educational content. Whether administrators need to refine the
  wording of a question, adjust the type to better suit the learning
  objectives, or update associated images for clarity, the "Update" option
  provides a straightforward avenue for these necessary modifications.`,

  `This refined set of update options not only simplifies the modification
  process but also underscores the commitment of MatHOTSanayanto
  empowering administrators with precise control over assessment content.
  By focusing on essential elements, the platform ensures that
  modifications are made with purpose and accuracy, contributing to the
  overall effectiveness of assessments within the educational ecosystem.
  The "Update" option stands as a targeted tool, allowing administrators
  to uphold the integrity of assessments while adapting to the evolving
  landscape of educational objectives.`,

  `Efficiently managing assessment content, the "Delete" option within the
  Question Management Page of MatHOTSanayanprovides administrators with a
  powerful tool to eliminate outdated or irrelevant questions. This
  streamlined functionality is designed to simplify the question
  management process, allowing administrators to maintain a precise and
  up-to-date question database. Confirming the deletion initiates a
  controlled cleanup, ensuring that only pertinent questions remain in the
  system.`,

  `By utilizing the "Delete" option, administrators can confidently
  declutter the assessment repository, eliminating questions that may no
  longer align with the current curriculum or learning objectives. This
  strategic removal of outdated questions contributes to the overall
  relevance and effectiveness of assessments within the educational
  institution.`,

  `The confirmation step in the deletion process serves as a deliberate
  safeguard, preventing accidental removals and ensuring that each
  deletion is an intentional action. This intentional design choice
  promotes a systematic and controlled cleanup, assuring administrators
  that the question database remains relevant, streamlined, and aligned
  with the educational goals of the institution. The "Delete" option,
  therefore, stands as a key component in maintaining the integrity and
  precision of the question management process within MatHotSanayan.`,

  `To ensure the precision and efficacy of assessments within
  MatHotSanayan, administrators can take advantage of the dedicated
  "Question Testing" section. Navigating to this area within the Question
  Management Page serves as the first step, providing a controlled
  environment for administrators to thoroughly evaluate questions before
  they are presented to students. In this section, administrators can
  meticulously select specific questions from the available list, offering
  a targeted approach to testing and ensuring a comprehensive review of
  each assessment item.`,

  `Within the "Question Testing" section, administrators are presented with
  a versatile testing environment that can display two types of questions:
  those requiring student input for answers and those offering
  multiple-choice options. This dual capability enhances the testing
  process, allowing administrators to assess questions that demand direct
  student responses and those structured with multiple-choice formats. By
  inputting test parameters that mirror actual testing conditions,
  administrators can initiate the test, simulating the student experience
  and carefully evaluating how questions are presented and answered in a
  controlled setting.`,

  `Upon completing the test, administrators can review the results,
  carefully examining question presentation, answer options, and
  correctness of solutions. This step is pivotal in identifying any
  discrepancies, ambiguities, or inaccuracies before questions are
  incorporated into live assessments. The iterative and adaptable nature
  of this testing process empowers administrators to refine questions as
  needed, ensuring that assessments maintain a high standard of accuracy
  and clarity. Ultimately, these comprehensive testing guidelines equip
  administrators within MatHOTSanayanwith the tools needed to deliver
  assessments that align seamlessly with educational objectives and
  enhance the overall learning experience for students.`,

  `Within MatHotSanayan, administrators wield powerful control over
  question options, facilitating seamless content management through the
  Admin Question Options section within the Question Management Page. This
  dedicated platform empowers administrators to add, update, and delete
  options associated with various questions, ensuring a dynamic and
  adaptable assessment environment. Navigating to the Admin Question
  Options section initiates a user-friendly interface where administrators
  can effortlessly introduce new options by utilizing the "Add Option"
  feature. This process allows for the input of option content, addition
  of relevant images, and designation of correctness if applicable,
  ensuring a diverse and engaging set of choices for students.`,

  `For ongoing refinement, administrators can utilize the "Update Option"
  functionality to make real-time adjustments to existing options. Whether
  modifying content, uploading new images, or adjusting correctness
  status, this feature facilitates responsive content management aligned
  with evolving educational objectives. The "Delete Option" feature
  streamlines the process of removing outdated or irrelevant options, and
  confirming the deletion ensures a controlled cleanup, maintaining the
  relevance and coherence of available choices.`,

  `Moreover, Admin Question Options include image management capabilities,
  allowing administrators to upload, replace, or remove images associated
  with each option. This ensures that visual content remains in harmony
  with the educational context, enhancing the overall assessment
  experience. Embracing an iterative approach to content refinement,
  administrators can continually add, update, or delete options based on
  feedback, assessment results, or changes in educational requirements.
  This iterative process guarantees that question options remain current,
  engaging, and aligned with learning objectives, solidifying Admin
  Question Options as a cornerstone for delivering assessments of the
  highest quality.`,

  `Within MatHotSanayan, administrators exercise robust control over
  question solutions through the Admin Question Solutions section within
  the Question Management Page. This dedicated platform empowers
  administrators to seamlessly add, update, and delete solutions
  associated with various questions, ensuring a dynamic and adaptable
  assessment environment. Navigating to the Admin Question Solutions
  section initiates a user-friendly interface where administrators can
  effortlessly introduce new solutions by utilizing the "Add Solution"
  feature. This process allows for the input of solution content, addition
  of relevant images, and designation of correctness if applicable,
  ensuring precise and informative solutions for students.`,

  `For ongoing refinement, administrators can utilize the "Update Solution"
  functionality to make real-time adjustments to existing solutions.
  Whether modifying content, uploading new images, or adjusting
  correctness status, this feature facilitates responsive content
  management aligned with evolving educational objectives. The "Delete
  Solution" feature streamlines the process of removing outdated or
  irrelevant solutions, and confirming the deletion ensures a controlled
  cleanup, maintaining the relevance and coherence of available answers.`,

  `Moreover, Admin Question Solutions include image management
  capabilities, allowing administrators to upload, replace, or remove
  images associated with each solution. This ensures that visual content
  remains in harmony with the educational context, enhancing the overall
  assessment experience. Embracing an iterative approach to content
  refinement, administrators can continually add, update, or delete
  solutions based on feedback, assessment results, or changes in
  educational requirements. This iterative process guarantees that
  question solutions remain current, accurate, and aligned with learning
  objectives, solidifying Admin Question Solutions as a cornerstone for
  delivering assessments of the highest quality.`,
];

export default docs;
