import styled from 'styled-components'
import {TEXT} from '../../theme/theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  margin: auto;
`
const Title = styled.p`
  margin: 4px auto;
  text-align: center;
`

const Body = styled.p`
  text-align: left;
  margin-right: auto;
  width: 100%;
`

const Section = styled.p`
  font-weight: 700;
`

const Subsection = styled.p`
  margin-right: auto;
  margin-left: 1rem;
`

const InnerSubsection = styled.p`
  margin-right: auto;
  margin-left: 2rem;
`

const TermsOfService = () => {
  return (
    <Container>
      <Title>
        <TEXT.BodyBold>AUTONOMY SOFTWARE, INC.</TEXT.BodyBold>
      </Title>
      <Title>
        <TEXT.BodyBold>TERMS OF USE</TEXT.BodyBold>
      </Title>

      <br />

      <Body>
        <TEXT.Body>Last Updated: October 4, 2022</TEXT.Body>
      </Body>

      <Body>
        <TEXT.BodyBold>
          OUR INTERFACE IS NOT OFFERED TO PERSONS OR ENTITIES WHO RESIDE IN, ARE CITIZENS OF, OR ARE
          LOCATED IN, ARE INCORPORATED IN, OR HAVE A REGISTERED OFFICE IN THE UNITED STATES OF
          AMERICA (COLLECTIVE, “US PERSONS”). MOREOVER, THE INTERFACE IS NOT OFFERED TO PERSONS OR
          ENTITIES WHO RESIDE IN, ARE CITIZENS OF, ARE LOCATED IN, ARE INCORPORATED IN, OR HAVE A
          REGISTERED OFFICE IN ANY RESTRICTED TERRITORY (AS DEFINED BELOW, AND ANY SUCH PERSON OR
          ENTITY FROM A RESTRICTED TERRITORY, A “RESTRICTED PERSON”). USE OF A VIRTUAL PRIVATE
          NETWORK (“VPN”) OR ANY OTHER PRIVACY OR ANONYMIZATION TOOL OR TECHNIQUE TO CIRCUMVENT OR
          ATTEMPT TO CIRCUMVENT THE RESTRICTIONS SET FORTH HEREIN IS PROHIBITED.
        </TEXT.BodyBold>
      </Body>
      <Body>
        <TEXT.Body>
          Autonomy Software, Inc. (“Autonomy”) or any successor/affiliate to Autonomy (collectively,
          “we,” “us,” or “our”) provides a website-hosted user interface available at
          https://app.overlay.market (“Interface”). The Interface provides access to a decentralized
          protocol run by smart contracts on the Ethereum blockchain that allows users to trade
          digital assets (the “Protocol”). The Interface is non-custodial and you retain control
          over your Digital Assets at all times.
        </TEXT.Body>
      </Body>
      <Body>
        <TEXT.BodyBold>
          THE PROTOCOL IS PROVIDED "AS IS", AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.
          Although Autonomy has developed a portion of the code for the Protocol, it does not
          provide, own, or control the Protocol, which is run by smart contracts deployed on the
          Ethereum blockchain. Upgrades and modifications to the Protocol are not managed by
          Autonomy, rather by the community. No developer or entity involved in creating the
          Protocol will be liable for any claims or damages whatsoever associated with your use,
          inability to use, or your interaction with other users of, the Protocol, including any
          direct, indirect, incidental, special, exemplary, punitive or consequential damages, or
          loss of profits, cryptocurrencies, tokens, or anything else of value.
        </TEXT.BodyBold>
      </Body>
      <Body>
        <TEXT.Body>
          Please read these Terms carefully, as these Terms govern your use of our Interface, and
          expressly cover your rights and obligations, and our disclaimers and limitations of legal
          liability, relating to such use. By clicking “I agree” to these Terms or otherwise
          accessing or using our Interface, you accept and agree to be bound by and to comply with
          these Terms, including the mandatory arbitration provision in Section 13. If you do not
          agree to these Terms, you must not access or use our Interface. You are entering into a
          binding agreement.
        </TEXT.Body>
      </Body>
      <Body>
        <TEXT.Body>
          Please carefully review the disclosures and disclaimers set forth in these Terms in their
          entirety before using any software developed by Autonomy Software, Inc. The information in
          Section 3 provides important details about the legal obligations associated with your use
          of the Interface. By accessing or using the Interface, you agree that we do not provide
          execution, settlement, or clearing services of any kind and we are not responsible for the
          execution, settlement, or clearing of transactions automated through the Interface.
        </TEXT.Body>
      </Body>

      <Section>1. DEFINITIONS</Section>

      <Body>
        <TEXT.Body>
          For the purposes of these Terms, the following capitalized terms shall have the following
          meanings:
        </TEXT.Body>
      </Body>

      <Subsection>
        <TEXT.Body>
          1.1. “Affiliate” means, with respect to a party to these Terms, any legal entity that,
          directly or indirectly controls, is controlled by, or is under common control with such
          party.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          1.2. “Applicable Law” means any domestic or foreign law, rule, statute, regulation,
          by-law, order, protocol, code, decree, or other directive, requirement or guideline,
          published or in force which applies to or is otherwise intended to govern or regulate any
          person, property, transaction, activity, event or other matter, including any rule, order,
          judgment, directive or other requirement or guideline issued by any Governmental Authority
          having jurisdiction over Autonomy, you, the Interface, or as otherwise duly enacted,
          enforceable by law, the common law or equity.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          1.3. “Blockchain” means the underlying blockchain infrastructure which the Interface
          leverages to perform portions of the services.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          1.4. “Digital Assets” means the relevant Blockchain utility token that may be used to
          purchase computational resources to run decentralized applications or perform actions on
          the relevant Blockchain.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          1.5. “Governmental Authority” includes any domestic or foreign federal, provincial or
          state, municipal, local or other governmental, regulatory, judicial or administrative
          authority.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          1.6. “Restricted Territories” means Iran, Iraq, Russian Federation, Belarus, Côte
          d’Ivoire, Cuba, Liberia, North Korea, Sudan, Syria, Myanmar (Burma), the regions of
          Crimea, Donetsk or Luhansk, or any other country or region that is subject of
          comprehensive country-wide or region-wide economic sanctions by the United States.
        </TEXT.Body>
      </Subsection>

      <Section>2. MODIFICATIONS; SUSPENSION; TERMINATION</Section>

      <Subsection>
        <TEXT.Body>
          2.1. Modifications. We reserve the right, in our sole discretion, to modify these Terms
          from time to time. If we make any modifications, we will notify you by updating the date
          at the top of these Terms and by maintaining a current version of these Terms at
          [overlay.market/terms]. All modifications will be effective when they are posted, and your
          continued use of the Interface will serve as confirmation of your acceptance of those
          modifications. If you do not agree with any modifications to these Terms, you must
          immediately stop accessing and using the Interface.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          2.2. No Liability. We will not be liable for any losses suffered by you resulting from any
          modification to any Interface or from any suspension or termination, for any reason, of
          your access to all or any portion of the Interface.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          2.3. Survival. The following sections will survive any termination of your access to the
          Interface regardless of the reasons for its expiration or termination, in addition to any
          other provision which by law or by its nature should survive: Sections 3-14.
        </TEXT.Body>
      </Subsection>

      <Section>3. ELIGIBILITY; COMPLIANCE; ACCEPTABLE USE</Section>

      <Subsection>
        <TEXT.Body>
          3.1. Eligibility. To access or use the Interface, you must be able to form a legally
          binding contract with us. Accordingly, you represent that you are at least eighteen years
          old and have the full right, power, and authority to enter into and comply with the Terms
          on behalf of yourself and any company or legal entity for which you may access or use the
          Interface. You further represent that your access and use of the Interface will fully
          comply with all Applicable Law, and that you will not access or use the Interface to
          conduct, promote, or otherwise facilitate any illegal activity.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          3.2. Compliance. You agree that we have the right to restrict your access to the Interface
          via any technically available methods if we suspect, in our sole discretion, that (a) you
          are using the Interface for money laundering or any illegal activity; (b) you have engaged
          in fraudulent activity; (c) you have acquired Digital Assets using inappropriate methods,
          including the use of stolen funds to purchase such assets; (d) you are the target of any
          sanctions administered or enforced by the U.S. Department of the Treasury’s Office of
          Foreign Assets Control (“OFAC”), the United Nations Security Council, the European Union,
          His Majesty’s Treasury, or any other legal or regulatory authority in any applicable
          jurisdiction; (e) either you, as an individual or an entity, or your wallet address is
          listed on the Specially Designated Nationals and Blocked Persons List (“SDN List”),
          Consolidated Sanctions List (“Non-SDN Lists), or any other sanctions lists administered by
          OFAC; (f) you are located, organized, or resident in a country or territory that is, or
          whose government is, the subject of sanctions, including but not limited to the Restricted
          Countries; or (g) you have otherwise acted in violation of these Terms. If we have a
          reasonable suspicion that you are utilizing the Interface for illegal purposes, we reserve
          the right to take whatever action we deem appropriate.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          3.3. Your Responsibilities - As a condition to accessing or using the Interface, you
          shall: (a) only use the Interface for lawful purposes and in accordance with these Terms;
          and (b) ensure that, at all times, all information that you provide on the Interface is
          current, complete and accurate.
        </TEXT.Body>
      </Subsection>

      <Subsection>
        <TEXT.Body>
          3.4. Acceptable Use - As a condition to accessing or using the Interface, you will not:
        </TEXT.Body>

        <InnerSubsection>
          <TEXT.Body>
            3.4.1. violate any Applicable Law, including, without limitation, any relevant and
            applicable anti-money laundering and anti-terrorist financing laws, such as applicable
            banking laws and regulations which may be based on the country or jurisdiction of your
            residence, or any Applicable Law, rule or regulation concerning the integrity of the
            trading markets, including (but not limited to) manipulative tactics, such as spoofing
            or manipuation;
          </TEXT.Body>
        </InnerSubsection>
        <InnerSubsection>
          <TEXT.Body>
            3.4.2. infringe on or misappropriate any contract, intellectual property or other
            third-party right, or commit a tort while using the Interface;
          </TEXT.Body>
        </InnerSubsection>
        <InnerSubsection>
          <TEXT.Body>
            3.4.3. use the Interface in any manner that could interfere with, disrupt, negatively
            affect, or inhibit other users from fully enjoying the Interface, or that could damage,
            disable, overburden, or impair the functioning of the Interface in any manner;
          </TEXT.Body>
        </InnerSubsection>
        <InnerSubsection>
          <TEXT.Body>
            3.4.4. attempt to circumvent any content filtering techniques or security measures that
            Autonomy employs on the Interface, or attempt to access any service or area of the
            Interface that you are not authorized to access;
          </TEXT.Body>
        </InnerSubsection>
        <InnerSubsection>
          <TEXT.Body>
            3.4.5. use the Interface to pay for, support, or otherwise engage in any illegal
            gambling activities, fraud, money-laundering, or terrorist activities, or other illegal
            activities;
          </TEXT.Body>
        </InnerSubsection>
        <InnerSubsection>
          <TEXT.Body>
            3.4.6. use any robot, spider, crawler, scraper, or other automated means or interface
            not provided by us, to access the Interface or to extract data;
          </TEXT.Body>
        </InnerSubsection>
        <InnerSubsection>
          <TEXT.Body>
            3.4.7. introduce any malware, virus, Trojan horse, worm, logic bomb, drop-dead device,
            backdoor, shutdown mechanism or other harmful material into the Interface;
          </TEXT.Body>
        </InnerSubsection>
        <InnerSubsection>
          <TEXT.Body>3.4.8. provide false, inaccurate, or misleading information;</TEXT.Body>
        </InnerSubsection>
        <InnerSubsection>
          <TEXT.Body>
            3.4.9. post content or communications on the website that are, in our sole discretion,
            libelous, defamatory, profane, obscene, pornographic, sexually explicit, indecent, lewd,
            vulgar, suggestive, harassing, hateful, threatening, offensive, discriminatory, bigoted,
            abusive, inflammatory, fraudulent, deceptive or otherwise objectionable;
          </TEXT.Body>
        </InnerSubsection>
        <InnerSubsection>
          <TEXT.Body>
            3.4.10. post content on the Interface containing unsolicited promotions or commercial
            messages or any chain messages or user content designed to deceive or trick the user of
            the Interface;
          </TEXT.Body>
        </InnerSubsection>
        <InnerSubsection>
          <TEXT.Body>
            3.4.11. use the Interface from a jurisdiction that we have, in our sole discretion, or a
            relevant Governmental Authority has determined is a jurisdiction where the use of the
            Interface is prohibited; or
          </TEXT.Body>
        </InnerSubsection>
        <InnerSubsection>
          <TEXT.Body>
            3.4.12. encourage or induce any third party to engage in any of the activities
            prohibited under this Section.
          </TEXT.Body>
        </InnerSubsection>
      </Subsection>

      <Section>4. PROPRIETARY RIGHTS</Section>

      <Subsection>
        <TEXT.Body>
          4.1.1. Excluding any third-party open-source software or third party software that the
          Interface incorporate, as between you and Autonomy, we own all intellectual property and
          other rights in the Interface and its contents, including (but not limited to) software,
          text, images, trademarks, service marks, copyrights, patents, and designs.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          4.1.2. Unless expressly authorized by us, you may not copy, modify, adapt, rent, license,
          sell, publish, distribute, or otherwise permit any third party to access or use the
          Interface or any of its contents.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          4.1.3. Provided that you are eligible, you are hereby granted a single, personal, limited
          license to access and use the Interface. This license is non-exclusive, non-transferable,
          and freely revocable by us at any time without notice or cause.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          4.1.4. Without limiting the generality of the foregoing, you may not: (a) resell, lease,
          lend, share, distribute or otherwise permit any third party to use the Interface; or (b)
          otherwise use the Interface or the Interface in a manner that violates the license granted
          hereunder or any other open-source licenses.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          4.1.5. Use of the Interface or its contents for any purpose not expressly permitted by
          these Terms is strictly prohibited.
        </TEXT.Body>
      </Subsection>

      <Section>5. YOUR CONTENT</Section>

      <Body>
        <TEXT.Body>
          You hereby grant to us a royalty-free, fully paid-up, sublicensable, transferable,
          perpetual, irrevocable, non-exclusive, worldwide license to use, copy, modify, create
          derivative works of, display, perform, publish and distribute, in any form, medium or
          manner, any content that is available to other users via the Interface as a result of your
          use of the Interface (collectively, “Your Content”) through your use of the Interface,
          including, without limitation, for promoting Autonomy (or its Affiliates) or the
          Interface. You represent and warrant that: (a) you own Your Content or have the right to
          grant the rights and licenses in these Terms; and (b) Your Content and our use of Your
          Content, as licensed herein, does not and will not violate, misappropriate or infringe on
          any third party’s rights.
        </TEXT.Body>
      </Body>

      <Section>6. PRIVACY</Section>

      <Body>
        <TEXT.Body>
          When you use the Interface, the only information we collect from you is your blockchain
          wallet address, completed transaction hashes, and the token names, symbols, or other
          blockchain identifiers of the tokens that you swap. We do not collect any personal
          information from you (e.g., your name or other identifiers that can be linked to you). We
          do, however, use third-party service providers, like Cloudflare, Google, Vercel Global
          CDN, AWS and Chainalysis, which may receive or independently obtain your personal
          information from publicly-available sources. We do not control how these third parties
          handle your data and you should review their privacy policies to understand how they
          collect, use, and share your personal information. In particular, please visit
          https://policies.google.com/technologies/partner-sites to learn more about how Google uses
          data. By accessing and using the Interface, you understand and consent to our data
          practices and our service providers' treatment of your information.
        </TEXT.Body>
      </Body>
      <Body>
        <TEXT.Body>
          We use the information we collect to detect, prevent, and mitigate financial crime and
          other illicit or fraudulent, unauthorized or illegal activities on the Interface. For
          these purposes, we may share the information we collect with blockchain analytics
          providers. We share information with these service providers only so that they can help us
          promote the safety, security, and integrity of the Interface. We do not retain the
          information we collect any longer than necessary for these purposes.
        </TEXT.Body>
      </Body>
      <Body>
        <TEXT.Body>
          Please note that when you use the Interface, you are interacting with the Ethereum
          blockchain, which provides transparency into your transactions. Autonomy does not control
          and is not responsible for any information you make public on the Ethereum blockchain by
          taking actions through the Interface.
        </TEXT.Body>
      </Body>

      <Section>7. ASSUMPTION OF RISK; REPRESENTATIONS AND WARRANTIES</Section>

      <Body>
        <TEXT.Body>YOU REPRESENT AND WARRANT THAT:</TEXT.Body>
      </Body>

      <Subsection>
        <TEXT.Body>
          (A). HAVE THE NECESSARY TECHNICAL EXPERTISE AND ABILITY TO REVIEW AND EVALUATE THE
          SECURITY, INTEGRITY AND OPERATION OF THE INTERFACE.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          (B) HAVE THE KNOWLEDGE, EXPERIENCE, UNDERSTANDING, PROFESSIONAL ADVICE AND INFORMATION TO
          MAKE YOUR OWN EVALUATION OF THE MERITS, RISKS AND APPLICABLE COMPLIANCE REQUIREMENTS UNDER
          APPLICABLE LAW.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          (C) KNOW, UNDERSTAND AND ACCEPT THE RISKS ASSOCIATED WITH, THE BLOCKCHAIN, DIGITAL ASSETS
          AND DECENTRALIZED FINANCE (IN GENERAL).
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          (D) ACCEPT AND ASSUME THE RISKS ASSOCIATED WITH DECENTRALIZED FINANCE AND ARE RESPONSIBLE
          FOR CONDUCTING YOUR OWN INDEPENDENT ANALYSIS OF THE RISKS SPECIFIC TO ANY DECENTRALIZED
          FINANCE. YOU HEREBY ASSUME AND AGREE THAT AUTONOMY WILL HAVE NO RESPONSIBILITY OR
          LIABILITY FOR, SUCH RISKS. YOU HEREBY IRREVOCABLY WAIVE, RELEASE AND DISCHARGE ALL CLAIMS,
          WHETHER KNOWN OR UNKNOWN TO YOU, AGAINST AUTONOMY, ITS AFFILIATES AND THEIR RESPECTIVE
          SHAREHOLDERS, MEMBERS, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS AND REPRESENTATIVES RELATED
          TO ANY OF THE RISKS SET FORTH HEREIN.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          (E) YOU UNDERSTAND THAT BLOCKCHAIN REMAINS UNDER DEVELOPMENT WHICH CREATES SECURITY AND
          TECHNOLOGICAL RISKS WHEN USING THE INTERFACE.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          (F) YOUR USE OF THE INTERFACE INVOLVES VARIOUS RISKS, INCLUDING, BUT NOT LIMITED TO,
          LOSSES DUE TO THE FLUCTUATION OF PRICES OF TOKENS OR ANY DATA STREAM. BEFORE USING THE
          INTERFACE, YOU SHOULD REVIEW THE RELEVANT DOCUMENTATION TO MAKE SURE YOU UNDERSTAND HOW
          THE INTERFACE WORKS.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          (G) THE INTERFACE AND YOUR DIGITAL ASSETS COULD BE IMPACTED BY ONE OR MORE REGULATORY
          INQUIRIES OR REGULATORY ACTIONS, WHICH COULD IMPEDE OR LIMIT THE ABILITY OF AUTONOMY TO
          CONTINUE TO MAKE AVAILABLE OUR SOFTWARE AND COULD IMPEDE OR LIMIT YOUR ABILITY TO ACCESS
          OR USE THE INTERFACE.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          (H) YOU UNDERSTAND THAT THESE TERMS ARE NOT INTENDED TO, AND DO NOT, CREATE OR IMPOSE ANY
          FIDUCIARY DUTIES ON US.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          (I) YOU SHOULD NOT TAKE, OR REFRAIN FROM TAKING, ANY ACTION BASED ON ANY INFORMATION
          CONTAINED ON THE INTERFACE OR ANY OTHER INFORMATION THAT IS MADE AVAILABLE AT ANY TIME,
          INCLUDING BLOG POSTS, DATA, ARTICLES, LINKS TO THIRD-PARTY CONTENT, DISCORD CONTENT, NEWS
          FEEDS, TUTORIALS, TWEETS, AND VIDEOS. BEFORE YOU MAKE ANY FINANCIAL, LEGAL, TECHNICAL, OR
          OTHER DECISIONS INVOLVING THE INTERFACE, YOU SHOULD SEEK INDEPENDENT PROFESSIONAL ADVICE
          FROM A LICENSED AND QUALIFIED INDIVIDUAL IN THE AREA FOR WHICH SUCH ADVICE WOULD BE
          APPROPRIATE.
        </TEXT.Body>
      </Subsection>

      <Section>8. DISCLOSURES; DISCLAIMERS</Section>

      <Subsection>
        <TEXT.BodyBold>
          8.1. Autonomy is a developer of software. Autonomy does not operate an exchange and has no
          oversight, involvement or control concerning your transactions using the Interface. All
          transactions between users of our software are executed peer-to-peer directly between user
          Ethereum addresses through a smart contract.{' '}
        </TEXT.BodyBold>
      </Subsection>
      <Subsection>
        <TEXT.BodyBold>
          8.2. You understand that Autonomy is not registered or licensed by any regulatory agency
          or authority. No such agency or authority has reviewed or approved the use of Autonomy
          software.
        </TEXT.BodyBold>
      </Subsection>
      <Subsection>
        <TEXT.BodyBold>
          8.3. You acknowledge that your data on the Interface may become irretrievably lost or
          corrupted or temporarily unavailable due to a variety of causes, and agree that, to the
          maximum extent permitted under Applicable Law, we will not be liable for any loss or
          damage caused by denial-of service attacks, software failures, viruses or other
          technologically harmful materials (including those that may infect your computer
          equipment), protocol changes by third-party providers, Internet outages, force majeure
          events or other disasters, scheduled or unscheduled maintenance, or other causes either
          within or outside of our control.
        </TEXT.BodyBold>
      </Subsection>
      <Subsection>
        <TEXT.BodyBold>
          8.4. We are not responsible for the content or services of any third-party, including,
          without limitation, any network, or apps like Discord, or MetaMask, and we make no
          representations regarding the content or accuracy of any third-party services or
          materials. The user interface available on the Interface is hosted on a third-party
          service and can only be accessed through this third party's website. We are not
          responsible for any action or omission taken by Vercel, our third party hosting service,
          as it pertains to the user interface or otherwise. The use and access of any third-party
          products or services, including through the Interface, is at your own risk.{' '}
        </TEXT.BodyBold>
      </Subsection>

      <Section>9. WARRANTIES; RELEASE </Section>

      <Subsection>
        <TEXT.Body>
          9.1. The Interface is provided on an “AS IS” and “AS AVAILABLE” basis. To the fullest
          extent permitted by law, we disclaim any representations and warranties of any kind,
          whether express, implied, or statutory, including (but not limited to) the warranties of
          merchantability and fitness for a particular purpose. You acknowledge and agree that your
          use of the Interface is at your own risk. We do not represent or warrant that access to
          the Interface will be continuous, uninterrupted, timely, or secure; that the information
          contained on the Interface will be accurate, reliable, complete, or current; or that the
          Interface will be free from errors, defects, viruses, or other harmful elements. No
          advice, information, or statement that we make should be treated as creating any warranty
          concerning the Interface. We do not endorse, guarantee, or assume responsibility for any
          advertisements, offers, or statements made by third parties concerning the Interface.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          9.2. You expressly agree that you assume all risks in connection with your access and use
          of the Interface. You further expressly waive and release us from any and all liability,
          claims, causes of action, or damages arising from or in any way relating to your use of
          the Interface.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          9.3. The disclaimer of implied warranties contained herein may not apply if and to the
          extent such warranties cannot be excluded or limited under the Applicable Law of the
          jurisdiction in which you reside.
        </TEXT.Body>
      </Subsection>

      <Section>10. INDEMNIFICATION </Section>

      <Body>
        <TEXT.Body>
          You will defend, indemnify, and hold harmless us, our Affiliates, and our and our
          Affiliates’ respective shareholders, members, directors, officers, employees, attorneys,
          agents, representatives, developers, suppliers and contractors (collectively, “Indemnified
          Parties”) from any claim, demand, lawsuit, action, proceeding, investigation, liability,
          damage, loss, cost or expense, including without limitation reasonable attorneys’ fees,
          arising out of or relating to (a) your access and use of, or conduct in connection with,
          the Interface; (b) your violation of any term or condition of these Terms, the right of
          any third party, or any Applicable Law; (c) any feedback or user content you provide to
          the Interface, if any; (d) your infringement or misappropriation of the rights of any
          other person or entity; or (e) any other party’s access and use of the Interface with your
          assistance or using any device or account that you own or control. If you are obligated to
          indemnify any Indemnified Party, Autonomy (or, at its discretion, the applicable
          Indemnified Party) will have the right, in its sole discretion, to control any action or
          proceeding and to determine whether Autonomy wishes to settle, and if so, on what terms.
          You will not in any event settle any claim without our prior written consent.
        </TEXT.Body>
      </Body>

      <Section>11. WAIVER OF INJUNCTIVE RELIEF</Section>

      <Body>
        <TEXT.Body>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, YOU AGREE THAT YOU WILL NOT BE PERMITTED TO OBTAIN
          AN INJUNCTION OR OTHER EQUITABLE RELIEF OF ANY KIND, SUCH AS ANY COURT OR OTHER ACTION
          THAT MAY INTERFERE WITH OR PREVENT THE DEVELOPMENT OR EXPLOITATION OF THE INTERFACE OR ANY
          OTHER WEBSITE, APPLICATION, CONTENT, SUBMISSION, PRODUCT, SERVICE, OR INTELLECTUAL
          PROPERTY OWNED, LICENSED, USED OR CONTROLLED BY AN INDEMNIFIED PARTY.
        </TEXT.Body>
      </Body>

      <Section>12. EXCLUSION OF CONSEQUENTIAL DAMAGES AND RELATED DAMAGES</Section>

      <Body>
        <TEXT.Body>
          In no event shall we (together with our Affiliates, including our and our Affiliates’
          respective shareholders, members, directors, officers, employees, attorneys, agents,
          representatives, suppliers or contractors) be liable for any incidental, indirect,
          special, punitive, consequential or similar damages or liabilities whatsoever (including,
          without limitation, damages for loss of data, information, revenue, goodwill, profits or
          other business or financial benefit) arising out of or in connection with the Interface
          (and any of its content and functionality), any performance or non-performance of the
          Interface, Digital Assets, decentralized financial products or any other product, service
          or other item provided by or on behalf of us, whether under contract, tort (including
          negligence), civil liability, statute, strict liability, breach of warranties, or under
          any other theory of liability, and whether or not we have been advised of, knew of or
          should have known of the possibility of such damages and notwithstanding any failure of
          the essential purpose of these Terms or any limited remedy hereunder.
        </TEXT.Body>
      </Body>

      <Section>13. DISPUTE RESOLUTION</Section>

      <Body>
        <TEXT.Body>
          Please read the following section carefully because it requires you to arbitrate certain
          disputes and claims with Autonomy and limits the manner in which you can seek relief from
          us, unless you opt out of arbitration by following the instructions set forth below.
        </TEXT.Body>
      </Body>

      <Subsection>
        <TEXT.Body>
          13.1. Prior to commencing any legal proceeding against us of any kind, including an
          arbitration as set forth below, you and we agree that we will attempt to resolve any
          dispute, claim, or controversy between us arising out of or relating to the agreement or
          the Interface (each, a “Dispute” and, collectively, “Disputes”) by engaging in good faith
          negotiations. Such good faith negotiations require, at a minimum, that the aggrieved party
          provide a written notice to the other party specifying the nature and details of the
          Dispute. The party receiving such notice shall have thirty (30) days to respond to the
          notice. Within sixty (60) days after the aggrieved party sent the initial notice, the
          parties shall meet and confer in good faith by videoconference, or by telephone, to try to
          resolve the Dispute.{' '}
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          13.2. If the parties are unable to resolve the Dispute within ninety (90) days after the
          aggrieved party sent the initial notice, the parties may agree to mediate their Dispute,
          or either party may submit the Dispute to arbitration. Any Dispute shall be finally and
          exclusively settled by arbitration under the JAMS Optional Expedited Arbitration
          Procedures. You understand that you are required to resolve all Disputes by binding
          arbitration. The arbitration shall be held on a confidential basis before a single
          arbitrator, who shall be selected pursuant to JAMS rules. The arbitration will be held in
          Denver, Colorado, unless you and we both agree to hold it elsewhere. Unless we agree
          otherwise, the arbitrator may not consolidate your claims with those of any other party.
          Any judgment on the award rendered by the arbitrator may be entered in any court of
          competent jurisdiction.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          13.3. The Notice must (a) include your name, residence address, email address, and
          telephone number; (b) describe the nature and basis of the claim; and (c) set forth the
          specific relief sought. Our notice to you will be similar in form to that described above.
          If you and Autonomy cannot reach an agreement to resolve the claim within thirty (30) days
          after such Notice is received, then either party may submit the dispute to the court in
          accordance with Applicable Law.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          13.4. You and Autonomy agree that any dispute arising out of or related to these Terms or
          the Interface is personal to you and Autonomy and that any dispute will be resolved solely
          through individual action, and will not be brought as a plaintiff in any purported class
          arbitration, class action, collective action, private attorney general action, or other
          representative proceeding. This provision applies to class arbitration.
        </TEXT.Body>
      </Subsection>
      <Subsection>
        <TEXT.Body>
          13.5. Any claim arising out of or related to these Terms or the Interface must be filed
          within one (1) year after such claim arose; otherwise, the claim is permanently barred,
          which means that you and Autonomy will not have the right to assert the claim.
        </TEXT.Body>
      </Subsection>

      <Subsection>
        <TEXT.Body>
          13.6. If any portion of this Section 14 is found to be unenforceable or unlawful for any
          reason, (a) the unenforceable or unlawful provision will be severed from these Terms; (b)
          severance of the unenforceable or unlawful provision will have no impact whatsoever on the
          remainder of this Section 14 or the parties’ ability to compel arbitration of any
          remaining claims on an individual basis under this Section 14; and (c) to the extent that
          any claims must therefore proceed on a class, collective, consolidated or representative
          basis, such claims must be litigated in a civil court of competent jurisdiction and not in
          arbitration, and the parties agree that litigation of those claims will be stayed pending
          the outcome of any individual claims in arbitration. Further, if any part of this Section
          14 is found to prohibit an individual claim seeking public injunctive relief, then that
          provision will have no effect to the extent such relief is allowed to be sought out of
          arbitration, and the remainder of this Section 14 will be enforceable.
        </TEXT.Body>
      </Subsection>

      <Section>14. GOVERNING LAW; JURY TRIAL WAIVER</Section>

      <Body>
        <TEXT.Body>
          The interpretation and enforcement of these Terms, and any dispute or claim arising out of
          or in connection or related to these Terms or the Interface it shall be governed by and
          construed and enforced under the laws of the State of Delaware, without regard to conflict
          of laws rules or principles. You agree that we may initiate a proceeding related to the
          enforcement or validity of our intellectual property rights in any court having
          jurisdiction. For any proceeding that is not subject to arbitration under these Terms, the
          state and federal courts located in Denver, Colorado, will have exclusive jurisdiction.
          You waive any object to venue in any such courts. You and we both agree to waive the right
          to demand a trial by jury.
        </TEXT.Body>
      </Body>

      <Section>15. MISCELLANEOUS</Section>

      <Body>
        <TEXT.Body>
          Any right or remedy of Autonomy set forth in these Terms is in addition to, and not in
          lieu of, any other right or remedy whether described in these Terms, under Applicable Law,
          at law or in equity. Our failure or delay in exercising any right, power, or privilege
          under these Terms shall not operate as a waiver thereof. The invalidity or
          unenforceability of any of these Terms shall not affect the validity or enforceability of
          any other of these Terms, all of which shall remain in full force and effect. We will have
          no responsibility or liability for any failure or delay in performance of the Interface,
          or any loss or damage that you may incur, due to any circumstance or event beyond our
          control, including without limitation any flood, extraordinary weather conditions,
          earthquake, or other act of God, fire, war, insurrection, riot, labor dispute, accident,
          action of government, communications, power failure, or equipment or software malfunction.
          You may not assign or transfer any right to use the Interface, or any of your rights or
          obligations under these Terms, without our express prior written consent, including by
          operation of law or in connection with any change of control. We may assign or transfer
          any or all of our rights or obligations under these Terms, in whole or in part, without
          notice or obtaining your consent or approval. Headings of sections are for convenience
          only and shall not be used to limit or construe such sections. These Terms contain the
          entire agreement and supersede all prior and contemporaneous understandings between the
          parties regarding the Interface. In the event of any conflict between these Terms and any
          other agreement you may have with us, these Terms will control unless the other agreement
          specifically identifies these Terms and declares that the other agreement supersedes these
          Terms.
        </TEXT.Body>
      </Body>
    </Container>
  )
}

export default TermsOfService
