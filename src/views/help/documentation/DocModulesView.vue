<template>
  <v-card-text>
    <div v-if="focusPage === 'module-main'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Modules Page
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        The Modules Manager Page in MatHotSanayan acts as a central hub,
        providing administrators with a robust set of tools to oversee and
        manage assessment modules efficiently. This pivotal control center
        streamlines essential tasks, offering a comprehensive suite of features
        for creating, updating, activating, and deleting modules. Administrators
        can effortlessly navigate through step-by-step procedures outlined in
        this documentation, ensuring a user-friendly experience in handling the
        intricacies of module management. From the inception of a new module to
        its eventual deactivation or deletion, every aspect is covered,
        empowering administrators with the control they need.
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_002.png')" />

      <p class="ma-6">
        In addition to core module management functionalities, this
        documentation sheds light on the seamless integration of question
        management within the Modules Manager Page. This ensures a holistic
        approach to assessment administration, allowing administrators to not
        only structure modules but also add questions effortlessly. By providing
        detailed insights into the process of question addition, MatHotSanayan
        offers a comprehensive solution that enables administrators to tailor
        assessments to their specific needs. This dual functionality,
        encompassing both module and question management, establishes the
        Modules Manager Page as a versatile and indispensable tool within the
        MatHotSanayan ecosystem.
      </p>
    </div>

    <div v-if="focusPage === 'module-search'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Modules Filter Search
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        The Module Page Filter Search function in MatHotSanayan introduces a
        versatile and efficient way for administrators to pinpoint specific
        modules based on various criteria. This feature empowers users to
        streamline their workflow by searching for modules according to three
        key parameters: module name, subject name, or keywords within the
        module's description.
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_004.png')" />

      <p class="ma-6">
        With the search by module name option, administrators can quickly locate
        a particular module by typing its name directly into the search bar.
        This targeted approach ensures swift access to specific assessments,
        saving valuable time and enhancing overall navigation.
      </p>

      <p class="ma-6">
        Similarly, the search by subject name allows for the effortless
        categorization of modules. Administrators can filter modules based on
        their designated subject, facilitating a systematic organization that
        aligns with the educational institution's curriculum structure.
      </p>

      <p class="ma-6">
        Moreover, the search by words within the module's description adds a
        layer of granularity to the search process. This functionality allows
        administrators to locate modules based on specific keywords present in
        their descriptions, providing a more nuanced and tailored approach to
        information retrieval.
      </p>
    </div>

    <div v-if="focusPage === 'module-create'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Module Creation
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        Effortlessly initiate the creation of new assessment modules within
        MatHotSanayan by accessing the dedicated "Create Module" section. This
        intuitive process facilitates a seamless experience for administrators
        tasked with building robust assessments. Upon entering this section,
        administrators encounter a user-friendly interface featuring fields such
        as the module name, module step, passing grade, module description,
        module objective, and module instructions.
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_003.png')" />

      <p class="ma-6">
        Begin the module creation process by specifying the module name, acting
        as the distinct title for the assessment. This field allows
        administrators to provide a clear and identifiable name, enhancing
        organization and clarity within the MatHotSanayan system.
      </p>

      <p class="ma-6">
        As administrators enter module details, the module step field stands out
        as a unique and impactful element. This feature functions as a
        stage-setting tool, determining the accessibility of the module for
        students. If set to step 1, the module becomes immediately accessible to
        students. However, by adjusting the module step to 2 or higher,
        administrators can establish a sequential progression, allowing students
        to access the module only when they reach the designated stage.
      </p>

      <p class="ma-6">
        Utilizing the passing grade slider, administrators have the flexibility
        to set the passing grade for the exam on a scale ranging from 10% to
        100%. This dynamic feature tailors assessments to meet the precise
        grading standards of the institution, offering adaptability in line with
        educational goals.
      </p>

      <p class="ma-6">
        Furthermore, administrators can furnish additional information about the
        module through the module description, module objective, and module
        instruction fields. These details provide a comprehensive overview of
        the module's purpose, objectives, and specific instructions for both
        administrators and exam-takers.
      </p>
    </div>

    <div v-if="focusPage === 'module-update'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Modules Update
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        Effortlessly refine and update existing assessment modules within
        MatHotSanayan through the intuitive "Update" option. This streamlined
        process provides administrators with a user-friendly interface to make
        necessary adjustments to module details. By accessing this option,
        administrators can easily modify parameters such as the module name,
        subject, passing grade, and other essential details. Once the
        modifications are made, simply save the changes, ensuring that the
        module information remains up-to-date, accurate, and reflective of the
        institution's evolving requirements. This seamless updating process
        enhances the adaptability of assessment modules, allowing educational
        institutions to maintain relevance and precision in their evaluation
        strategies.
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_005.png')" />

      <p class="ma-6">
        Furthermore, the Modules Manager Page in MatHotSanayan introduces a
        dynamic activation feature that empowers administrators to enable or
        disable modules based on specific scheduling needs. This functionality
        offers strategic control over the availability of assessments within the
        system. By toggling the activation status of modules, administrators can
        precisely manage the timing of assessments, ensuring that they align
        with the academic calendar and institutional requirements. This flexible
        approach enables administrators to orchestrate the assessment
        environment with precision, enhancing overall control and efficiency in
        the administration of exams.
      </p>
    </div>

    <div v-if="focusPage === 'module-delete'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Module Deletion
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        Efficiently declutter your assessment system by removing redundant
        modules with a straightforward deletion process within MatHotSanayan.
        This user-friendly functionality streamlines the task of module
        management, ensuring a seamless experience for administrators. To
        initiate the deletion process, administrators can simply select the
        module they wish to remove. Once the target module is chosen, a
        confirmation prompt ensures intentional actions, minimizing the risk of
        accidental deletions. Confirm the action, and with a click, effortlessly
        eliminate the selected module, promoting a system cleanup that aligns
        with the evolving needs of your educational institution.
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_006.png')" />

      <p class="ma-6">
        It's important to note that the deletion function is designed with a
        failsafe mechanism — a module can only be deleted if it has no questions
        attached to it. This built-in safeguard ensures the integrity of your
        assessment data and prevents unintentional data loss. This intentional
        design choice prioritizes data accuracy and helps administrators
        maintain a well-organized and error-free assessment environment. By
        incorporating this precaution, MatHotSanayan ensures a secure and
        controlled deletion process, reinforcing the commitment to precision and
        reliability in module management.
      </p>
    </div>

    <div v-if="focusPage === 'module-question'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Question Table
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        The Question Management Page in MatHotSanayan offers administrators a
        highly organized and transparent interface for overseeing and
        customizing assessment content. This page provides a structured display
        of questions associated with each module, allowing administrators to
        effortlessly access a comprehensive list. This design promotes ease of
        navigation and ensures a quick overview of the assessment content,
        fostering transparency in question management. Through this feature,
        administrators can stay well-informed about the composition of
        assessments, facilitating efficient oversight and customization.
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_007.png')" />

      <p class="ma-6">
        One key aspect of the Question Management Page is the detailed breakdown
        of columns, each providing essential information about the questions.
        The "Image" column allows administrators to incorporate visuals
        associated with questions, adding a multimedia dimension to assessment
        content. The "Question" column presents the textual content of each
        question, ensuring clarity and precision in conveying assessment
        prompts. The "Question Type" column categorizes questions based on their
        format, aiding administrators in distinguishing between various question
        types, such as word problems, multiple selection questions, or
        single-correct answer questions. Additionally, the "Correct Answers and
        Solutions" column provides critical information about the number of
        correct answers and corresponding solutions, empowering administrators
        to evaluate question complexity effectively. Finally, the "Number of
        Available Options" column signifies the total count of answer choices,
        contributing to a comprehensive understanding of question structure.
      </p>

      <p class="ma-6">
        In conclusion, the Question Management Page serves as a central hub for
        administrators, streamlining the process of managing and customizing
        assessment questions. Its user-friendly interface, coupled with detailed
        column descriptions, ensures transparency and efficiency in question
        administration within MatHotSanayan. This comprehensive feature reflects
        the commitment to providing a robust platform that facilitates precise
        and diverse assessment content customization for educational
        institutions.
      </p>
    </div>

    <div v-if="focusPage === 'module-question-create'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Question Create
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        Accessing the "Create Questions" section within the Question Management
        Page in MatHotSanayan marks the inception of a streamlined process for
        incorporating new questions into assessments. This dedicated section
        offers administrators an intuitive and user-friendly interface designed
        to simplify the customization of assessment content. Within this
        environment, administrators can seamlessly input the question text,
        provide multiple-choice answers, and designate the correct solution,
        fostering a dynamic approach to question creation.
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_008.png')" />

      <p class="ma-6">
        Furthermore, the "Create Questions" section supports the efficient
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
        institution's assessment goals.
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_009.png')" />

      <p class="ma-6">
        This multifaceted functionality not only enhances the efficiency of the
        question creation process but also ensures that administrators have the
        tools needed to tailor assessments according to their specific
        requirements within the MatHotSanayan ecosystem. The user-friendly
        interface, coupled with the diverse question types, exemplifies the
        platform's commitment to providing a robust and adaptable environment
        for effective question management.
      </p>
    </div>

    <div v-if="focusPage === 'module-question-update'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Question Update
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'module-question-delete'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Question Deletion
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'module-question-test'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Question Test
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'module-question-options'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Question Options
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'module-question-solutions'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Question Solutions
      </span>
      <v-divider class="my-2" />
    </div>
  </v-card-text>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  page: string;
}>();

const focusPage = ref(props.page);

watch(
  () => props.page,
  (newValue) => {
    focusPage.value = newValue;
  }
);
</script>
