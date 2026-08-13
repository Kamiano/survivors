"use client";

import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}

export default function TeamBody() {
  // 1. Secretariat staff definition array
  const staffMembers: TeamMember[] = [
    {
      name: "Kyazze Arnold",
      role: "FOUNDER & EXECUTIVE DIRECTOR",
      bio: "Kyazze Arnold is a refugee, queer person, radical feminist, sex worker by choice, and a dedicated human rights defender passionately advocating for the rights, dignity, and liberation of sex workers, queer, and gender-diverse communities. Arnold is the Founder and Executive Director of Survivors , a refugee-led feminist organization working to empower refugee, migrant, and internally displaced sex workers in all their diversities across Kenya and beyond.\n\nWith years of experience in grassroots organizing, feminist movement building, and human rights advocacy, Arnold has become a powerful voice in advancing gender justice, sexual and reproductive justice, and social protection for marginalized communities. Their work centers on creating safe spaces, strengthening feminist leadership, promoting bodily autonomy, and challenging systems of oppression, violence, stigma, discrimination, and criminalization affecting sex workers, refugee women, queer persons, and migrant communities.\n\nArnold is deeply passionate about women’s rights, sex workers’ rights, queer and gender-diverse rights, and the empowerment of adolescent girls and young people from refugee and migrant backgrounds.\n\nThey strongly advocate for access to comprehensive sexual and reproductive health and rights, mental health support, economic justice, and community-led humanitarian responses that prioritize dignity and inclusion.\n\nTheir activism also focuses on climate justice and the disproportionate impact of climate change, displacement, poverty, and humanitarian crises on sex workers and vulnerable migrant communities.\n\nArnold continues to amplify the realities and lived experiences of refugee and migrant sex workers within regional and global feminist and human rights spaces.\n\nIn recognition of their leadership and advocacy, Arnold currently serves on the Global Fund for Women / CoMotion Advisory Committee on Birth Justice and Maternal Newborn Health and is also a Steering Committee Member at the Mixed Migration Centre under the Danish Refugee Council.\n\nThey additionally serve at The Victor Mukasa Foundation as the Representative for the Africa Region, contributing to regional advocacy, movement building, and the advancement of queer and feminist justice across the continent.\n\nThrough these platforms, Arnold continues to influence policies, strengthen feminist movements, and advocate for justice, protection, and meaningful inclusion of marginalized communities globally.",
      imageSrc: "/images/Kyaze.jpeg"
    },
    {
      name: "Rahim Munubi",
      role: "PROGRAMS/OPERATIONS MANAGER",
      bio: "Rahim Munubi is a gender-diverse sex worker, radical feminist, and dedicated human rights defender serving as the Programs Manager at KNESWO Feminist Initiative. He leads programs that support refugees, asylum seekers, migrants, and internally displaced sex workers in all their diversities, with a strong commitment to feminist values, social justice, and community-led empowerment.\n\nRahim’s work is grounded in advancing human rights, equality, and dignity for marginalized communities often excluded from mainstream systems of support. Through his leadership, he focuses on building inclusive systems of care, strengthening community resilience, amplifying marginalized voices, and advocating for justice and protection for vulnerable populations.\n\nAs both an activist and a community leader with lived experience as a sex worker, Rahim brings deep understanding, authenticity, and compassion to his advocacy and programming. He has developed strong expertise in program management, community mobilization, capacity strengthening, strategic planning, stakeholder engagement, and monitoring and evaluation. His lived realities continue to shape interventions that are community-centered, responsive, and rooted in the actual needs of displaced and marginalized communities.\n\nRahim has extensive experience in grassroots organizing, policy advocacy, and health and human rights promotion, particularly for sex workers, queer communities, and gender and sexual minorities. Through his involvement with the GBMSMS community and feminist movements, he continues to challenge stigma, discrimination, criminalization, and violence affecting sex workers and other marginalized groups while promoting safer, inclusive, and affirming spaces for all.\n\nHe is deeply passionate about feminist leadership, sexual and reproductive justice, mental health, economic empowerment, and the protection of refugee and migrant communities. Through his work at KNESWO Feminist Initiative, Rahim remains committed to driving systemic change, strengthening community voices, and ensuring that displaced sex workers and vulnerable populations are recognized, respected, protected, and empowered to thrive.",
      imageSrc: "/images/Rahim.jpeg"
    },
    {
      name: "Winniefred Ikanza",
      role: "FINANCE AND ADMINISTRATION OFFICER",
      bio: "Winniefred Ikanza is a refugee woman living in Kenya, a passionate feminist, and a dedicated human rights advocate serving as the Finance and Administration Manager at KNESWO Feminist Initiative. She holds a Degree in Human Resource Management and is committed to advancing feminist leadership, community organizing, and social justice among refugee and migrant communities.\n\nWith experience in financial management, administration, and grassroots community work, Winniefred plays an important role in strengthening organizational systems and supporting programs that promote dignity, equality, and inclusion for marginalized populations. She is deeply passionate about empowering young women and adolescent girls in refugee and migrant communities through advocacy, leadership development, economic empowerment, and access to essential social and health services.\n\nThrough her work at KNESWO Feminist Initiative, Winniefred continues to champion the rights of refugee women, migrant women, and vulnerable young people.",
      imageSrc: "/images/Ikanza.jpeg"
    }
  ];

  // 2. Strategy Program Advisors definition array
  const strategyAdvisors: TeamMember[] = [
    {
      name: "Deborah Leticia Akumu",
      role: "STRATEGY PROGRAM ADVISOR",
      bio: "Deborah Leticia Akumu is a Ugandan-Australian human rights advocate, HIV activist, and community leader dedicated to advancing equity, health, and social inclusion. Drawing on their lived experience and advocacy expertise, they work closely with LGBTIQA+ sex workers, migrants, and refugees to promote access to healthcare, sexual and reproductive health rights, and community support services.\n\nDeborah is particularly passionate about empowering women, girls, and young people, addressing stigma and discrimination, and ensuring that marginalized voices are represented in policy and decision-making processes. Their work spans community engagement, leadership, and global advocacy, including contributions to international health and youth-led organizations. Deborah's efforts were recognized by UNESCO in 2019 among other awards for their anti-stigma work. In 2023, they were awarded the Global Advocacy for HIV Cure Academy Fellowship for their work on including marginalized populations in HIV cure research.\n\nDeborah serves as the board representative for the Oceania region at the Global Network of Young People Living with HIV (Y+ Global) and sits on the Board of Directors at the National Association of People with HIV Australia (NAPWHA). They are also a member of the Program Advisory Committee at the Red Umbrella Fund as the Asia Pacific representative. Deborah works with Many Coloured Sky as a Peer Worker and Community Development Officer, ensuring LGBTIQA+ refugees and asylum seekers have access to services, advocacy, referral, and information, while co-designing and delivering comprehensive capacity-building trainings to service workers within allied sectors. Additionally, Deborah is a Strategy Program Advisor working closely with KNESWO’s programme team to design, implement, and evaluate programs that diversely and uniquely respond to the needs of migrant and gender-diverse sex workers.",
      imageSrc: "/images/deborah.jpeg"
    },
    {
      name: "Jacob Awity",
      role: "STRATEGY PROGRAM ADVISOR",
      bio: "Jacob brings expertise in program strategy, organizational development, and community engagement. He supports KNESWO in designing and strengthening initiatives that promote human rights, social inclusion, and resilience among LGBTQ+, refugee, and other marginalized communities.",
      imageSrc: "/images/jacob.jpeg"
    }
  ];

  // 3. Separate Board Members definition array
  const boardMembers: TeamMember[] = [
    {
      name: "Phelister Abdalla",
      role: "BOARD CHAIR",
      bio: "Phelister Abdalla is a feminist and woman human rights defender with extensive experience in advancing sex worker rights at national, regional, and global levels. She currently serves as the Board Chair of KNESWO Feminist Initiative and National Coordinator of DADA KIPEPEO, where she continues to champion dignity, safety, and inclusion for sex workers and marginalized communities.\n\nShe is the former President of the Global Network of Sex Work Projects (NSWP) and previously served on the Steering Committee of the Red Umbrella Fund, contributing to global advocacy and resource mobilization for sex worker-led movements. At national level, she also served as the National Coordinator of the Kenya Sex Workers Alliance, strengthening coordination and advocacy for sex workers across Kenya.\n\nThrough her leadership, she continues to advance feminist, rights-based approaches that center the lived realities and voices of sex workers.",
      imageSrc: "/images/Abdalla.jpeg"
    },
    {
      name: "Shyleen Momanyi",
      role: "BOARD CO-CHAIR",
      bio: "Shyleen Momanyi is a feminist activist and a champion of Sexual and Reproductive Health and Rights (SRHR) for women and girls in all their diversities. She serves as the Executive Director of YWLI, where she is responsible for strategic thinking, planning, resource mobilization, and overseeing the successful implementation of the organization’s mission.\n\nShe brings extensive experience in young feminist organizing, movement building, and campaign and policy advocacy on SRHR, and continues to be a driving force in advancing gender equality. Her motivation is rooted in fostering communities where women and girls of all diversities are respected and treated with dignity.\n\nShyleen has played a key role in empowering the next generation of young feminist leaders through mentorship and movement strengthening. Outside her activism work, she enjoys collecting and nurturing plants, reflecting her passion as a dedicated plant enthusiast. She also serves as Co-Chair of the KNESWO Feminist Initiative, contributing to its leadership.",
      imageSrc: "/images/Shyleen.jpeg"
    },
    {
      name: "Loya waihenya",
      role: "BOARD SECRETARY",
      bio: "Loya Waihenya is a lawyer, philanthropist, human rights advocate, leader and strategic thinker with a strong commitment to advancing social justice and restoring dignity to vulnerable communities. She is the founder of the Loya Waihenya Foundation, an organization dedicated to restoring dignity by providing probono legal aid services to refugees, marginalized persons, women and prisoners. Through the Froundation's Better Sleep for All Program, the organization provides double decker beds, mattresses and beddings to vulnerable persons in society.The Foundation believes there is a direct correlation between better sleep and improved mental health, dignity and overall well-being. Loya holds a Bachelor of Law (LL.B) degree from the Catholic University of Eastern Africa(CUEA) and is a Certified Professional Mediator (CPM). She currently supports refugees in Kenya in partnership with Alight.Org an international NGO that supports refugees globally.She has previously worked with the National Gay and Human Rights Commission (Legal Arc) and UHAI Eashri where she supported LGBTQI+ persons through legal aid, grant management and human rights advocacy. Loya enjoys networking and is passionate about leadership,  human rights and community development.She enjoys co-creating practical, realistic and innovative solutions that make the world a better place.",
      imageSrc: "/images/loya.jpeg"
    },
    {
      name: "Carolyne Njoroge",
      role: "BOARD TREASURER",
      bio: "Ms. Carolyne Njoroge, is a Kenyan citizen by birth. She is a sex workers rights activist and the National coordinator at the kenya sex workers alliance (KESWA) based in Nairobi, Kenya. She is a co-coordinator of the EndFemicideKe Kajiado Chapter. As a Sex worker Human Right Defender, she is passionate on realizing gender equality, community empowerment, capacity building/strengthening and diverse sex workers organizing. She is an accomplished Human rights and HIV prevention advocate for key populations who led the facilitation of Kenyan national government under the ministry of health NASCOP to develop a national guideline on the use of PrEP during her 2015 AIDS Vaccine Advocacy Coalition (AVAC) advocacy fellowship. Carolyne has worked as a regional coordinator consultant for the Global Network of Sex Work Projects (NSWP) to develop a PrEP briefing paper capturing voices from Zimbabwe, Kenya and south Africa. She is an accredited Research Evaluator by both AMREF and KEMRI as a community expert Co-Co-Principal Investigator. Carolyne has over 10 years’ experience working with the national movement of sex workers in kenya focusing on achieving social justice, inclusive participation, decision making and designing of structural barriers interventions with, by and for sex workers. ",
      imageSrc: "/images/newww.png"
    },
    {
      name: "Faith Mbehero",
      role: "BOARD MEMBER",
      bio: "Faith Mbehero is a Kenyan SRHR leader, nurse midwife, and health systems specialist with more than 18 years of experience advancing sexual and reproductive health, gender justice, and equitable access to care across Africa. She has led regional programs in Kenya, Uganda, Burkina Faso, Benin, and Senegal, working alongside governments, civil society organizations, healthcare providers, and grassroots movements to strengthen health systems and expand access to quality, rights-based services for women, adolescents, and marginalized communities. Her expertise spans clinical quality improvement, abortion care advocacy, self-care interventions, organizational strengthening, and movement building. Faith previously served as Director of Service Delivery for Africa at Planned Parenthood Global, where she supported youth-led and provider-led initiatives and strengthened partnerships that advanced reproductive rights and locally led solutions. She is also the founding Executive Director of Reproductive Health Network Kenya (RHNK), a provider network established to improve access to quality reproductive healthcare and amplify the voices of frontline providers. Currently, Faith is the Founder and Head of Mission and Internal Operations at Third Sector Builders, a Pan-African advisory organization supporting feminist movements, community-based organizations, and locally led systems change. Faith is passionate about centering the leadership, dignity, and lived experiences of historically excluded populations and young people, in the design and governance of health and social justice initiatives.",
      imageSrc: "/images/BOARD.jpeg"
    }
  ];

  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* Structural Ambient Background Blurs */}
      <div className="absolute top-1/3 left-0 h-96 w-96 rounded-full bg-[#E63946]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-0 h-96 w-96 rounded-full bg-[#E61F72]/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">

        {/* SECTION 1: SECRETARIAT HEADLINE */}
        <div className="mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
          >
            Secretariat
          </motion.h2>
        </div>

        {/* Secretariat Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-x-12 mb-24">
          {staffMembers.map((member, i) => (
            <motion.div
              key={`staff-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group flex flex-col space-y-5"
            >
              <div className="relative w-full aspect-4/3 sm:aspect-16/10 overflow-hidden bg-neutral-100 rounded-lg shadow-xs">
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  className="w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              <div className="space-y-2 grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight transition-colors group-hover:text-neutral-800">
                  {member.name}
                </h3>
                <h4 className="text-xs md:text-[13px] font-bold text-[#E63946] tracking-wider uppercase leading-tight min-h-4">
                  {member.role}
                </h4>
                <p className="pt-2 text-neutral-600 font-light text-sm md:text-base leading-relaxed group-hover:text-neutral-700 transition-colors whitespace-pre-line">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECTION 2: STRATEGY PROGRAM ADVISORS HEADLINE & DESCRIPTION */}
        <div className="mb-12 md:mb-16 pt-8 border-t border-neutral-100">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6"
          >
            Strategy Program Advisors
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl space-y-4 text-neutral-600 font-light text-sm md:text-base leading-relaxed"
          >
            <p>
              The KNESWO Strategy Program Advisors serve as a strategic advisory body that provides high-level guidance, expertise, and support to strengthen the organization’s vision, mission, programs, and institutional growth. The Advisors play a key role in shaping strategic direction, strengthening program quality, supporting innovation, and ensuring that KNESWO remains responsive to the evolving needs, challenges, and priorities of the rights holders and communities we serve.
            </p>
            <p>
              The Advisors provide technical guidance in areas including strategic planning, program design, advocacy, movement building, partnerships, resource mobilization, organizational development, safeguarding, and sustainability. They support the leadership team through evidence-based recommendations, critical reflection, and knowledge sharing to enhance effective decision-making and accountability.
            </p>
            <p>
              Through their expertise and networks, KNESWO Strategy Program Advisors contribute to strengthening the organization’s impact, visibility, and long-term sustainability while ensuring that all programs uphold principles of dignity, equality, inclusion, justice, and community-led approaches.
            </p>
            <p className="italic font-normal text-neutral-500">
              The Advisors do not manage the daily operations of KNESWO but provide independent guidance, mentorship, and strategic support to help the organization achieve its goals and advance the rights and wellbeing of the communities it serves.
            </p>
          </motion.div>
        </div>

        {/* Strategy Program Advisors Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-x-12 mb-24">
          {strategyAdvisors.map((member, i) => (
            <motion.div
              key={`advisor-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group flex flex-col space-y-5"
            >
              <div className="relative w-full aspect-4/3 sm:aspect-16/10 overflow-hidden bg-neutral-100 rounded-lg shadow-xs">
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  className="w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              <div className="space-y-2 grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight transition-colors group-hover:text-neutral-800">
                  {member.name}
                </h3>
                <h4 className="text-xs md:text-[13px] font-bold text-[#E63946] tracking-wider uppercase leading-tight min-h-4">
                  {member.role}
                </h4>
                <p className="pt-2 text-neutral-600 font-light text-sm md:text-base leading-relaxed group-hover:text-neutral-700 transition-colors whitespace-pre-line">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECTION 3: OUR BOARD HEADLINE */}
        <div className="mb-12 md:mb-16 pt-8 border-t border-neutral-100">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
          >
            Our Board
          </motion.h2>
        </div>

        {/* Board Members Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-x-12">
          {boardMembers.map((member, i) => (
            <motion.div
              key={`board-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group flex flex-col space-y-5"
            >
              <div className="relative w-full aspect-4/3 sm:aspect-16/10 overflow-hidden bg-neutral-100 rounded-lg shadow-xs">
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  className="w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              <div className="space-y-2 grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight transition-colors group-hover:text-neutral-800">
                  {member.name}
                </h3>
                <h4 className="text-xs md:text-[13px] font-bold text-[#E63946] tracking-wider uppercase leading-tight min-h-4">
                  {member.role}
                </h4>
                <p className="pt-2 text-neutral-600 font-light text-sm md:text-base leading-relaxed group-hover:text-neutral-700 transition-colors whitespace-pre-line">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}