# **VA Claims Outgrow Quiz \- V4**

## **Complete Builder Instructions \- All Questions in One Quiz**

**Your Job:** Build ONE comprehensive quiz in Outgrow with all questions.  
 **Total Questions:** 500+ questions (varies by number of conditions)  
 **Time Estimate:** 3-5 days to build  
 **Estimated User Completion Time:** 60-120 minutes (depending on number of conditions)

---

# **QUIZ SETUP (Do This First)**

1. Log into Outgrow  
2. Click "Create New Content"  
3. Select "Calculator" type  
4. Choose "1-Column Layout"  
5. Name it: **VA Claims Academy \- Complete Intake**  
6. Settings to enable:  
   * Progress bar: ON  
   * Auto-save: ON (CRITICAL \- quiz is long)  
   * Mobile optimized: ON  
   * Save & Resume: ON (if available)

---

# **WELCOME SCREEN**

**Headline:** Start Your VA Disability Claim

**Subheadline:** Complete this comprehensive intake form to build your personalized claim documents

**Body Text:** (copy exactly)

```
This comprehensive intake will take approximately 60-120 minutes depending on how 
many conditions you're claiming.

You'll provide:
• Your basic information and military service details
• The conditions you're claiming
• Detailed information for each condition (symptoms, treatment, life impact)
• Supporting documentation

YOUR PROGRESS IS AUTOMATICALLY SAVED. You can pause and return anytime using 
the link sent to your email.

We recommend completing this in multiple sessions if you're claiming several conditions.
```

**Button Text:** Start My Claim

---

# **MODULE 1: VETERAN PROFILE (Questions 1-48)**

## **SECTION 1: CONTACT INFORMATION**

### **Question 1: Full Legal Name**

* **Question Type:** Text Input  
* **Required:** Yes  
* **Placeholder:** First Middle Last  
* **Help Text:** Enter your full legal name as it appears on your DD-214

### **Question 2: Email Address**

* **Question Type:** Text Input  
* **Required:** Yes  
* **Validation:** Email format  
* **Placeholder:** \[email protected\]  
* **Help Text:** We'll send your personalized claim documents to this email. You'll also receive a save/resume link.

### **Question 3: Phone Number**

* **Question Type:** Text Input  
* **Required:** Yes  
* **Validation:** Phone format  
* **Placeholder:** (555) 555-5555  
* **Help Text:** We'll call you at this number for your consultation

---

## **SECTION 2: MILITARY SERVICE**

### **Question 4: Current Military Status**

* **Question Type:** Single Select (Radio Buttons)  
* **Required:** Yes  
* **Options:**  
  * Active Duty  
  * Veteran (Separated/Retired)  
  * National Guard  
  * Reserve

### **Question 5: Branch(es) of Service**

* **Question Type:** Multi-Select (Checkboxes)  
* **Required:** Yes (minimum 1\)  
* **Help Text:** Select all branches you served in  
* **Options:**  
  * Army  
  * Army National Guard  
  * Army Reserves  
  * Air Force  
  * Air National Guard  
  * Air Force Reserve  
  * Navy  
  * Navy Reserves  
  * Marine Corps  
  * Marine Corps Reserve  
  * Coast Guard  
  * Coast Guard Reserve  
  * Space Force  
  * Space Force Reserve

### **Question 6: VA File Number (if known)**

* **Question Type:** Text Input  
* **Required:** No  
* **Placeholder:** C-12345678 or leave blank if you don't have one yet  
* **Help Text:** Your VA file number starts with 'C-' followed by 8-9 digits. If you don't have one yet, that's okay \- leave this blank.

### **Question 7: Overall Service Start Date**

* **Question Type:** Date Picker (Month/Year only)  
* **Required:** Yes  
* **Help Text:** When did you first enter military service?  
* **Format:** MM/YYYY (use dropdown selectors, NOT calendar picker)  
* **⚠️ IMPORTANT:** Set date range from 1950 to 2025

### **Question 8: Overall Service End Date**

* **Question Type:** Date Picker (Month/Year only) OR "Currently Serving" option  
* **Required:** Yes  
* **Format:** MM/YYYY OR checkbox "I am currently serving"  
* **Logic:** If they check "Currently serving", hide/skip the date picker

---

## **SECTION 3: JOB TITLES (MOS/RATE) \- Questions 9-47**

**⚠️ CRITICAL:** This section repeats up to 10 times. Each job title has 3 questions \+ 1 "add another" question.

### **FIRST JOB TITLE (Always Required)**

#### **Question 9: First Job Title (MOS/Rate)**

* **Question Type:** Text Input  
* **Required:** Yes  
* **Placeholder:** e.g., Infantry Squad Leader (11B) or Hospital Corpsman (HM)  
* **Help Text:** Provide your FULL job title, not just the MOS code. Include both the title and the code.

#### **Question 10: First MOS Start Date**

* **Question Type:** Date Picker (Month/Year)  
* **Required:** Yes  
* **Format:** MM/YYYY

#### **Question 11: First MOS End Date**

* **Question Type:** Date Picker (Month/Year)  
* **Required:** Yes  
* **Format:** MM/YYYY

#### **Question 12: Do you have a SECOND job title to add?**

* **Question Type:** Single Select (Radio Buttons)  
* **Required:** Yes  
* **Options:**  
  * Yes  
  * No

**⚠️ LOGIC JUMP ON QUESTION 12:**

* If they select "No" → Jump to Question 48 (Duty Stations)  
* If they select "Yes" → Continue to Question 13

---

### **SECOND THROUGH TENTH JOB TITLES (Questions 13-47)**

**⚠️ REPEAT THE PATTERN:** Copy the 4-question pattern for each additional job title.

**Question Numbers:**

* Job Title 2: Q13-16 (Logic Jump on Q16: No→Q48, Yes→Q17)  
* Job Title 3: Q17-20 (Logic Jump on Q20: No→Q48, Yes→Q21)  
* Job Title 4: Q21-24 (Logic Jump on Q24: No→Q48, Yes→Q25)  
* Job Title 5: Q25-28 (Logic Jump on Q28: No→Q48, Yes→Q29)  
* Job Title 6: Q29-32 (Logic Jump on Q32: No→Q48, Yes→Q33)  
* Job Title 7: Q33-36 (Logic Jump on Q36: No→Q48, Yes→Q37)  
* Job Title 8: Q37-40 (Logic Jump on Q40: No→Q48, Yes→Q41)  
* Job Title 9: Q41-44 (Logic Jump on Q44: No→Q48, Yes→Q45)  
* Job Title 10: Q45-47 (NO "add another" \- always go to Q48)

**Pattern for each:**

* Q\[N\]: \[Ordinal\] Job Title (MOS/Rate) \- Text Input, Required  
* Q\[N+1\]: \[Ordinal\] Start Date \- Date Picker, Required  
* Q\[N+2\]: \[Ordinal\] End Date \- Date Picker, Required  
* Q\[N+3\]: Do you have \[NEXT\] job title? \- Yes/No with Logic Jump

---

## **SECTION 4: DUTY STATIONS**

### **Question 48: Duty Stations and Bases**

* **Question Type:** Text Area  
* **Required:** Yes  
* **Rows:** 6  
* **Character Limit:** 1000  
* **Placeholder:** (copy exactly)

```
List all bases where you were stationed, including:
• Basic training and tech school
• Permanent duty stations
• Deployments
• TDY assignments

Include approximate dates for each location.

Example:
Fort Benning, GA (Basic Training, Jan-Apr 2005)
Fort Campbell, KY (2005-2008)
Deployed to Iraq (Apr 2007-Apr 2008)
Fort Hood, TX (2008-2012)
```

* **Help Text:** Some bases have presumptive conditions due to contaminated water (Camp Lejeune), burn pits, Agent Orange, or other exposures. Be thorough\!

---

## \# FILE 1: MODULE 2 \- CONDITION SCREENING QUESTIONS

\#\# Questions 49-139 (approximately)

\*\*NOTE TO BUILDER:\*\* This replaces the old Q50 multi-select approach. Each condition now has its own screening question flow.

\---

\# MODULE 2: CONDITION SELECTION \- NEW STRUCTURE

\#\#\# Question 49: Condition Selection Instructions  
\- \*\*Question Type:\*\* Text Block (not a question, just display text)  
\- \*\*Content:\*\* (copy exactly)  
\`\`\`  
📋 STEP 2: EVALUATE YOUR CONDITIONS

Now we'll go through each potential VA disability condition one by one.

For each condition, we'll ask:  
✓ Do you experience this condition?  
✓ If yes, describe it in your own words  
✓ Whether you already have a VA rating for it

HOW THIS WORKS:  
\- If you answer YES to a condition, you'll provide detailed information about that   
  specific condition (symptoms, treatment, impact on your life)  
\- If you answer NO, we'll move to the next condition  
\- This ensures we capture complete details for every condition you're claiming

IMPORTANT: Include conditions you want to get rated for the FIRST time AND   
conditions you already have a rating for but want an INCREASE.

We also need to know about existing rated conditions because they might be causing   
new secondary conditions.

Let's begin evaluating your conditions...  
\`\`\`

\---

\#\# CONDITION 1: TINNITUS

\#\#\# Question 50: Do you suffer from Tinnitus?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*   
\`\`\`  
TINNITUS  
Commonly mistaken with Tendonitis \- but this is the ringing in the ears that's so   
annoying. Do you ever have that high-pitched ringing when it's really quiet, or late   
at night when you're trying to sleep? If it's really bad, it'll be all the time.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q51  
\- If NO → Skip to Q54 (next condition: PTSD)

\---

\#\#\# Question 51: Describe your Tinnitus in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe how the tinnitus affects you, when you notice it most, how loud or constant it is..."  
\- \*\*Only show if Q50 \= Yes\*\*

\---

\#\#\# Question 52: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Tinnitus  
  \- No, this is a new claim  
\- \*\*Only show if Q50 \= Yes\*\*

\---

\#\#\# Question 53: \[Tinnitus Condition Builder Starts Here\]  
\- \*\*Note:\*\* This is where the full 100-question condition builder for Tinnitus would begin  
\- \*\*Only show if Q50 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q54 (next condition)  
\- \*\*Builder details will be in FILE 2\*\*

\---

\#\# CONDITION 2: PTSD (POST-TRAUMATIC STRESS DISORDER)

\#\#\# Question 54: Do you suffer from PTSD?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
PTSD (POST-TRAUMATIC STRESS DISORDER)  
This is when you experienced or witnessed traumatic events during service and now   
have symptoms like nightmares, flashbacks, anxiety, hypervigilance (always being on   
alert), anger issues, or avoiding situations that remind you of the trauma. Many   
veterans describe it as "can't shut my brain off" or "always waiting for something   
bad to happen."  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q55  
\- If NO → Skip to Q58 (next condition: Depression)

\---

\#\#\# Question 55: Describe your PTSD in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your symptoms, triggers, how it affects your daily life..."  
\- \*\*Only show if Q54 \= Yes\*\*

\---

\#\#\# Question 56: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for PTSD  
  \- No, this is a new claim  
\- \*\*Only show if Q54 \= Yes\*\*

\---

\#\#\# Question 57: \[PTSD Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for PTSD  
\- \*\*Only show if Q54 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q58 (next condition)

\---

\#\# CONDITION 3: DEPRESSION

\#\#\# Question 58: Do you suffer from Depression?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
DEPRESSION  
This goes beyond just feeling sad. It's persistent low mood, loss of interest in things   
you used to enjoy, sleeping too much or too little, feeling worthless or hopeless, low   
energy, trouble concentrating. Many veterans say things like "I just don't care anymore"   
or "can't get motivated to do anything."  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q59  
\- If NO → Skip to Q62 (next condition: Anxiety)

\---

\#\#\# Question 59: Describe your Depression in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your symptoms, how long you've felt this way, how it impacts your life..."  
\- \*\*Only show if Q58 \= Yes\*\*

\---

\#\#\# Question 60: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Depression  
  \- No, this is a new claim  
\- \*\*Only show if Q58 \= Yes\*\*

\---

\#\#\# Question 61: \[Depression Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Depression  
\- \*\*Only show if Q58 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q62 (next condition)

\---

\#\# CONDITION 4: ANXIETY

\#\#\# Question 62: Do you suffer from Anxiety?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
ANXIETY  
Excessive worry, panic attacks, feeling on edge or restless, racing heart, sweating,   
trouble breathing, avoiding social situations or crowds. Veterans often describe it as   
"always feeling like something bad is about to happen" or "can't relax even when there's   
no threat."  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q63  
\- If NO → Skip to Q66 (next condition: Sleep Apnea)

\---

\#\#\# Question 63: Describe your Anxiety in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your anxiety symptoms, when they happen, what triggers them..."  
\- \*\*Only show if Q62 \= Yes\*\*

\---

\#\#\# Question 64: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Anxiety  
  \- No, this is a new claim  
\- \*\*Only show if Q62 \= Yes\*\*

\---

\#\#\# Question 65: \[Anxiety Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Anxiety  
\- \*\*Only show if Q62 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q66 (next condition)

\---

\#\# CONDITION 5: SLEEP APNEA

\#\#\# Question 66: Do you suffer from Sleep Apnea?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
SLEEP APNEA  
You stop breathing repeatedly during sleep, often causing you to wake up gasping or   
choking. Your spouse or partner might say you snore really loud and then suddenly stop   
breathing for a bit. You wake up tired even after a full night's sleep, fall asleep during   
the day, have morning headaches. Many veterans use a CPAP machine for this.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q67  
\- If NO → Skip to Q70 (next condition: Migraine Headaches)

\---

\#\#\# Question 67: Describe your Sleep Apnea in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your sleep issues, snoring, breathing problems, use of CPAP..."  
\- \*\*Only show if Q66 \= Yes\*\*

\---

\#\#\# Question 68: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Sleep Apnea  
  \- No, this is a new claim  
\- \*\*Only show if Q66 \= Yes\*\*

\---

\#\#\# Question 69: \[Sleep Apnea Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Sleep Apnea  
\- \*\*Only show if Q66 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q70 (next condition)

\---

\#\# CONDITION 6: MIGRAINE HEADACHES

\#\#\# Question 70: Do you suffer from Migraine Headaches?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
MIGRAINE HEADACHES  
Not just regular headaches \- these are severe, throbbing headaches often on one side of   
your head. Usually come with sensitivity to light and sound, nausea, sometimes vision   
problems. They can last hours or days and force you to lie down in a dark room. Different   
from tension headaches or sinus headaches.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q71  
\- If NO → Skip to Q74 (next condition: Back Pain)

\---

\#\#\# Question 71: Describe your Migraine Headaches in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe frequency, severity, what triggers them, how they affect you..."  
\- \*\*Only show if Q70 \= Yes\*\*

\---

\#\#\# Question 72: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Migraine Headaches  
  \- No, this is a new claim  
\- \*\*Only show if Q70 \= Yes\*\*

\---

\#\#\# Question 73: \[Migraine Headaches Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Migraine Headaches  
\- \*\*Only show if Q70 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q74 (next condition)

\---

\#\# CONDITION 7: BACK PAIN (LUMBOSACRAL STRAIN)

\#\#\# Question 74: Do you suffer from Back Pain?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
BACK PAIN (LUMBOSACRAL STRAIN)  
Chronic lower back pain \- the kind that's always there or flares up regularly. Makes it   
hard to bend over, lift things, stand for long periods, or sit for too long. Might have   
started from carrying heavy gear, jumping from vehicles, rucking, or just years of military   
wear and tear on your spine.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q75  
\- If NO → Skip to Q78 (next condition: Neck Pain)

\---

\#\#\# Question 75: Describe your Back Pain in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe where it hurts, what makes it worse, how it limits you..."  
\- \*\*Only show if Q74 \= Yes\*\*

\---

\#\#\# Question 76: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Back Pain  
  \- No, this is a new claim  
\- \*\*Only show if Q74 \= Yes\*\*

\---

\#\#\# Question 77: \[Back Pain Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Back Pain  
\- \*\*Only show if Q74 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q78 (next condition)

\---

\#\# CONDITION 8: NECK PAIN (CERVICAL STRAIN)

\#\#\# Question 78: Do you suffer from Neck Pain?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
NECK PAIN (CERVICAL STRAIN)  
Chronic neck pain and stiffness. Trouble turning your head fully, pain that radiates into   
your shoulders or upper back, headaches that start in your neck. Often from wearing heavy   
helmets, looking down at equipment, vehicle accidents, or parachute landings.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q79  
\- If NO → Skip to Q82 (next condition: Knee Pain)

\---

\#\#\# Question 79: Describe your Neck Pain in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your neck pain, stiffness, range of motion issues..."  
\- \*\*Only show if Q78 \= Yes\*\*

\---

\#\#\# Question 80: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Neck Pain  
  \- No, this is a new claim  
\- \*\*Only show if Q78 \= Yes\*\*

\---

\#\#\# Question 81: \[Neck Pain Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Neck Pain  
\- \*\*Only show if Q78 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q82 (next condition)

\---

\#\# CONDITION 9: KNEE PAIN

\#\#\# Question 82: Do you suffer from Knee Pain?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
KNEE PAIN  
Chronic pain in one or both knees. Might have swelling, grinding/popping sounds, instability   
(knee gives out), trouble with stairs, kneeling, or squatting. Common from running on concrete,   
jumping from vehicles, rucking with heavy loads, or old injuries that never fully healed.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q83  
\- If NO → Skip to Q86 (next condition: Shoulder Pain)

\---

\#\#\# Question 83: Describe your Knee Pain in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe which knee(s), what activities make it worse, any swelling or instability..."  
\- \*\*Only show if Q82 \= Yes\*\*

\---

\#\#\# Question 84: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Knee Pain  
  \- No, this is a new claim  
\- \*\*Only show if Q82 \= Yes\*\*

\---

\#\#\# Question 85: \[Knee Pain Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Knee Pain  
\- \*\*Only show if Q82 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q86 (next condition)

\---

\#\# CONDITION 10: SHOULDER PAIN

\#\#\# Question 86: Do you suffer from Shoulder Pain?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
SHOULDER PAIN  
Chronic pain in one or both shoulders. Trouble reaching overhead, reaching behind your back,   
lifting things, or pain when sleeping on that side. Might have a history of dislocations,   
rotator cuff problems, or just years of repetitive strain from military activities.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q87  
\- If NO → Skip to Q90 (next condition: Hip Pain)

\---

\#\#\# Question 87: Describe your Shoulder Pain in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe which shoulder(s), range of motion problems, what you can't do..."  
\- \*\*Only show if Q86 \= Yes\*\*

\---

\#\#\# Question 88: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Shoulder Pain  
  \- No, this is a new claim  
\- \*\*Only show if Q86 \= Yes\*\*

\---

\#\#\# Question 89: \[Shoulder Pain Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Shoulder Pain  
\- \*\*Only show if Q86 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q90 (next condition)

\---

\#\# CONDITION 11: HIP PAIN

\#\#\# Question 90: Do you suffer from Hip Pain?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
HIP PAIN  
Chronic pain in one or both hips. Pain in the groin, outer hip, or buttock area. Trouble   
walking long distances, getting in/out of vehicles, putting on shoes/socks. Stiffness   
especially in the morning. Often from repetitive impact, carrying heavy loads, or old injuries.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q91  
\- If NO → Skip to Q94 (next condition: Ankle Pain)

\---

\#\#\# Question 91: Describe your Hip Pain in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe which hip(s), what movements hurt, how it limits your activities..."  
\- \*\*Only show if Q90 \= Yes\*\*

\---

\#\#\# Question 92: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Hip Pain  
  \- No, this is a new claim  
\- \*\*Only show if Q90 \= Yes\*\*

\---

\#\#\# Question 93: \[Hip Pain Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Hip Pain  
\- \*\*Only show if Q90 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q94 (next condition)

\---

\#\# CONDITION 12: ANKLE PAIN

\#\#\# Question 94: Do you suffer from Ankle Pain?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
ANKLE PAIN  
Chronic pain, instability, or repeated sprains in one or both ankles. The ankle might give   
out when walking on uneven ground. Swelling, stiffness, or arthritis. Common from jump   
training, running on rough terrain, old sprains that never healed right, or just constant   
stress on the ankle from military activities.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q95  
\- If NO → Skip to Q98 (next condition: Foot Pain)

\---

\#\#\# Question 95: Describe your Ankle Pain in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe which ankle(s), instability, swelling, what makes it worse..."  
\- \*\*Only show if Q94 \= Yes\*\*

\---

\#\#\# Question 96: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Ankle Pain  
  \- No, this is a new claim  
\- \*\*Only show if Q94 \= Yes\*\*

\---

\#\#\# Question 97: \[Ankle Pain Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Ankle Pain  
\- \*\*Only show if Q94 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q98 (next condition)

\---

\#\# CONDITION 13: FOOT PAIN (PLANTAR FASCIITIS)

\#\#\# Question 98: Do you suffer from Foot Pain?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
FOOT PAIN (PLANTAR FASCIITIS)  
Chronic pain in your feet, especially in the heel or arch. Often worst when you first get   
up in the morning or after sitting for a while. Sharp, stabbing pain in the bottom of your   
foot. Makes standing or walking for long periods difficult. Common from all the marching,   
running, and standing in boots on hard surfaces.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q99  
\- If NO → Skip to Q102 (next condition: Elbow Pain)

\---

\#\#\# Question 99: Describe your Foot Pain in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe which foot/feet, where it hurts, when it's worst..."  
\- \*\*Only show if Q98 \= Yes\*\*

\---

\#\#\# Question 100: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Foot Pain  
  \- No, this is a new claim  
\- \*\*Only show if Q98 \= Yes\*\*

\---

\#\#\# Question 101: \[Foot Pain Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Foot Pain  
\- \*\*Only show if Q98 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q102 (next condition)

\---

\#\# CONDITION 14: ELBOW PAIN

\#\#\# Question 102: Do you suffer from Elbow Pain?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
ELBOW PAIN  
Chronic pain in one or both elbows. Might be tennis elbow (outside pain), golfer's elbow   
(inside pain), or arthritis. Pain when gripping, lifting, turning doorknobs, or using tools.   
Often from repetitive movements, carrying weapons, mechanical work, or old injuries.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q103  
\- If NO → Skip to Q106 (next condition: Wrist Pain)

\---

\#\#\# Question 103: Describe your Elbow Pain in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe which elbow(s), what activities cause pain, grip strength issues..."  
\- \*\*Only show if Q102 \= Yes\*\*

\---

\#\#\# Question 104: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Elbow Pain  
  \- No, this is a new claim  
\- \*\*Only show if Q102 \= Yes\*\*

\---

\#\#\# Question 105: \[Elbow Pain Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Elbow Pain  
\- \*\*Only show if Q102 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q106 (next condition)

\---

\#\# CONDITION 15: WRIST PAIN

\#\#\# Question 106: Do you suffer from Wrist Pain?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
WRIST PAIN  
Chronic pain, weakness, or instability in one or both wrists. Might have carpal tunnel   
symptoms (numbness/tingling), arthritis, or old fractures that didn't heal right. Pain when   
typing, gripping, lifting, or rotating your wrist. Common from repetitive movements, old   
injuries, or hand-to-hand combat training.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q107  
\- If NO → Skip to Q110 (next condition: Hand/Finger Pain)

\---

\#\#\# Question 107: Describe your Wrist Pain in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe which wrist(s), numbness/tingling, what you can't do..."  
\- \*\*Only show if Q106 \= Yes\*\*

\---

\#\#\# Question 108: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Wrist Pain  
  \- No, this is a new claim  
\- \*\*Only show if Q106 \= Yes\*\*

\---

\#\#\# Question 109: \[Wrist Pain Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Wrist Pain  
\- \*\*Only show if Q106 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q110 (next condition)

\---

\#\# CONDITION 16: HAND/FINGER PAIN

\#\#\# Question 110: Do you suffer from Hand or Finger Pain?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
HAND/FINGER PAIN  
Chronic pain, stiffness, or arthritis in your hands or fingers. Trouble gripping, writing,   
buttoning shirts, or fine motor tasks. Fingers might lock up or have trigger finger. Common   
from old fractures, frostbite, repetitive gripping, or arthritis from years of hard use.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q111  
\- If NO → Skip to Q114 (next condition: Radiculopathy)

\---

\#\#\# Question 111: Describe your Hand/Finger Pain in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe which hand(s)/finger(s), dexterity issues, what you can't do..."  
\- \*\*Only show if Q110 \= Yes\*\*

\---

\#\#\# Question 112: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Hand/Finger Pain  
  \- No, this is a new claim  
\- \*\*Only show if Q110 \= Yes\*\*

\---

\#\#\# Question 113: \[Hand/Finger Pain Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Hand/Finger Pain  
\- \*\*Only show if Q110 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q114 (next condition)

\---

\#\# CONDITION 17: RADICULOPATHY

\#\#\# Question 114: Do you suffer from Radiculopathy?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
RADICULOPATHY  
Commonly known as Sciatica, but most of our clients know it as "that shooting pain feeling   
that goes down through your glutes and gives stabbing, tingling with some numbness feeling."   
It's nerve pain that radiates from your spine down your leg (or down your arm if it's in   
your neck). Can feel like electric shocks, burning, or pins and needles.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q115  
\- If NO → Skip to Q118 (next condition: Hearing Loss)

\---

\#\#\# Question 115: Describe your Radiculopathy in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe where the pain shoots to, numbness/tingling, what triggers it..."  
\- \*\*Only show if Q114 \= Yes\*\*

\---

\#\#\# Question 116: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Radiculopathy  
  \- No, this is a new claim  
\- \*\*Only show if Q114 \= Yes\*\*

\---

\#\#\# Question 117: \[Radiculopathy Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Radiculopathy  
\- \*\*Only show if Q114 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q118 (next condition)

\---

\#\# CONDITION 18: HEARING LOSS

\#\#\# Question 118: Do you suffer from Hearing Loss?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
HEARING LOSS  
You have trouble hearing conversations, especially in noisy environments. People sound muffled.   
You have to ask people to repeat themselves. You turn the TV up louder than others need it.   
Common from exposure to loud equipment, weapons fire, aircraft, or vehicles without proper   
hearing protection.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q119  
\- If NO → Skip to Q122 (next condition: IBS)

\---

\#\#\# Question 119: Describe your Hearing Loss in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe which ear(s), how much trouble you have hearing, in what situations..."  
\- \*\*Only show if Q118 \= Yes\*\*

\---

\#\#\# Question 120: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Hearing Loss  
  \- No, this is a new claim  
\- \*\*Only show if Q118 \= Yes\*\*

\---

\#\#\# Question 121: \[Hearing Loss Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Hearing Loss  
\- \*\*Only show if Q118 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q122 (next condition)

\---

\#\# CONDITION 19: IBS (IRRITABLE BOWEL SYNDROME)

\#\#\# Question 122: Do you suffer from IBS?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
IBS (IRRITABLE BOWEL SYNDROME)  
Chronic stomach and bowel problems \- frequent diarrhea, constipation, or alternating between   
both. Cramping, bloating, gas, urgent need to find a bathroom. Makes it hard to go places   
without knowing where bathrooms are. Often gets worse with stress. Many veterans describe   
having to map out bathrooms everywhere they go.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q123  
\- If NO → Skip to Q126 (next condition: GERD)

\---

\#\#\# Question 123: Describe your IBS in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your symptoms, frequency, how it impacts your daily life..."  
\- \*\*Only show if Q122 \= Yes\*\*

\---

\#\#\# Question 124: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for IBS  
  \- No, this is a new claim  
\- \*\*Only show if Q122 \= Yes\*\*

\---

\#\#\# Question 125: \[IBS Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for IBS  
\- \*\*Only show if Q122 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q126 (next condition)

\---

\#\# CONDITION 20: GERD (ACID REFLUX)

\#\#\# Question 126: Do you suffer from GERD?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
GERD (GASTROESOPHAGEAL REFLUX DISEASE / ACID REFLUX)  
Chronic heartburn, burning sensation in your chest or throat, acid taste in your mouth,   
trouble swallowing. Often worse at night or after eating. You might take Tums, Prilosec,   
or other antacids regularly. Can be connected to stress or medications.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q127  
\- If NO → Skip to Q130 (next condition: Diabetes Type 2\)

\---

\#\#\# Question 127: Describe your GERD in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your symptoms, frequency, what triggers it, medications you take..."  
\- \*\*Only show if Q126 \= Yes\*\*

\---

\#\#\# Question 128: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for GERD  
  \- No, this is a new claim  
\- \*\*Only show if Q126 \= Yes\*\*

\---

\#\#\# Question 129: \[GERD Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for GERD  
\- \*\*Only show if Q126 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q130 (next condition)

\---

\#\# CONDITION 21: DIABETES TYPE 2

\#\#\# Question 130: Do you suffer from Diabetes Type 2?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
DIABETES TYPE 2  
Your body doesn't process sugar correctly. You have high blood sugar levels. You might need   
to check your blood sugar, take medication or insulin, watch your diet carefully. Symptoms   
include excessive thirst, frequent urination, blurry vision, slow-healing wounds, fatigue.   
Can be service-connected through Agent Orange exposure or as secondary to PTSD/medications.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q131  
\- If NO → Skip to Q134 (next condition: Hypertension)

\---

\#\#\# Question 131: Describe your Diabetes Type 2 in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe when diagnosed, treatments, blood sugar management, complications..."  
\- \*\*Only show if Q130 \= Yes\*\*

\---

\#\#\# Question 132: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Diabetes Type 2  
  \- No, this is a new claim  
\- \*\*Only show if Q130 \= Yes\*\*

\---

\#\#\# Question 133: \[Diabetes Type 2 Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Diabetes Type 2  
\- \*\*Only show if Q130 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q134 (next condition)

\---

\#\# CONDITION 22: HYPERTENSION (HIGH BLOOD PRESSURE)

\#\#\# Question 134: Do you suffer from Hypertension?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
HYPERTENSION (HIGH BLOOD PRESSURE)  
Your blood pressure is consistently high (usually over 140/90). You might take blood pressure   
medication daily. Often has no symptoms, but can cause headaches, dizziness, or chest pain.   
Can be service-connected directly or as secondary to conditions like sleep apnea, PTSD, or   
kidney problems.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q135  
\- If NO → Skip to Q138 (next condition: Heart Disease)

\---

\#\#\# Question 135: Describe your Hypertension in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe when diagnosed, typical blood pressure readings, medications..."  
\- \*\*Only show if Q134 \= Yes\*\*

\---

\#\#\# Question 136: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Hypertension  
  \- No, this is a new claim  
\- \*\*Only show if Q134 \= Yes\*\*

\---

\#\#\# Question 137: \[Hypertension Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Hypertension  
\- \*\*Only show if Q134 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q138 (next condition)

\---

\#\# CONDITION 23: HEART DISEASE (ISCHEMIC HEART DISEASE)

\#\#\# Question 138: Do you suffer from Heart Disease?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
HEART DISEASE (ISCHEMIC HEART DISEASE)  
Problems with blood flow to your heart. Might include coronary artery disease, history of   
heart attack, angina (chest pain), or need for stents/bypass. Symptoms include chest pain   
or pressure, shortness of breath, fatigue. Often related to Agent Orange exposure, burn pits,   
or secondary to other conditions.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q139  
\- IF NO → Skip to Q142 (next condition: Peripheral Neuropathy)

\---

\#\#\# Question 139: Describe your Heart Disease in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your diagnosis, treatments, symptoms, how it limits your activities..."  
\- \*\*Only show if Q138 \= Yes\*\*

\---

\#\#\# Question 140: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Heart Disease  
  \- No, this is a new claim  
\- \*\*Only show if Q138 \= Yes\*\*

\---

\#\#\# Question 141: \[Heart Disease Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Heart Disease  
\- \*\*Only show if Q138 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q142 (next condition)

\---

\#\# CONDITION 24: PERIPHERAL NEUROPATHY

\#\#\# Question 142: Do you suffer from Peripheral Neuropathy?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
PERIPHERAL NEUROPATHY  
Nerve damage causing numbness, tingling, burning, or stabbing pain in your hands and feet.   
Your feet might feel like they're "asleep" all the time. Trouble feeling hot/cold, balance   
problems, dropping things. Can be from diabetes, Agent Orange exposure, or other toxic   
exposures during service.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q143  
\- If NO → Skip to Q146 (next condition: Skin Conditions)

\---

\#\#\# Question 143: Describe your Peripheral Neuropathy in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe where you have symptoms, severity, how it affects daily activities..."  
\- \*\*Only show if Q142 \= Yes\*\*

\---

\#\#\# Question 144: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Peripheral Neuropathy  
  \- No, this is a new claim  
\- \*\*Only show if Q142 \= Yes\*\*

\---

\#\#\# Question 145: \[Peripheral Neuropathy Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Peripheral Neuropathy  
\- \*\*Only show if Q142 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q146 (next condition)

\---

\#\# CONDITION 25: SKIN CONDITIONS

\#\#\# Question 146: Do you suffer from Skin Conditions?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
SKIN CONDITIONS (PSORIASIS, ECZEMA, DERMATITIS, SCARRING)  
Chronic skin problems like rashes, itching, scaling, blistering, or significant scarring from   
burns or injuries. Includes psoriasis (thick, scaly patches), eczema (red, itchy rash),   
dermatitis (contact reactions), or disfiguring scars. Can be from chemical exposures, burn   
pits, environmental factors, or injuries during service.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q147  
\- If NO → Skip to Q150 (next condition: Asthma)

\---

\#\#\# Question 147: Describe your Skin Condition in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe what type of skin condition, where on your body, how often it flares up..."  
\- \*\*Only show if Q146 \= Yes\*\*

\---

\#\#\# Question 148: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Skin Conditions  
  \- No, this is a new claim  
\- \*\*Only show if Q146 \= Yes\*\*

\---

\#\#\# Question 149: \[Skin Conditions Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Skin Conditions  
\- \*\*Only show if Q146 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q150 (next condition)

\---

\#\# CONDITION 26: ASTHMA

\#\#\# Question 150: Do you suffer from Asthma?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
ASTHMA  
Chronic breathing problems with wheezing, shortness of breath, chest tightness, or coughing.   
You might use an inhaler regularly. Symptoms get worse with exercise, cold air, dust, or   
stress. Can be from burn pit exposure, dust storms in deployment, chemical exposures, or   
other environmental factors during service.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q151  
\- If NO → Skip to Q154 (next condition: COPD)

\---

\#\#\# Question 151: Describe your Asthma in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your symptoms, what triggers attacks, inhaler use, activity limitations..."  
\- \*\*Only show if Q150 \= Yes\*\*

\---

\#\#\# Question 152: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Asthma  
  \- No, this is a new claim  
\- \*\*Only show if Q150 \= Yes\*\*

\---

\#\#\# Question 153: \[Asthma Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Asthma  
\- \*\*Only show if Q150 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q154 (next condition)

\---

\#\# CONDITION 27: COPD (CHRONIC OBSTRUCTIVE PULMONARY DISEASE)

\#\#\# Question 154: Do you suffer from COPD?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
COPD (CHRONIC OBSTRUCTIVE PULMONARY DISEASE)  
Chronic lung disease that makes it hard to breathe. Includes emphysema or chronic bronchitis.   
You have a persistent cough, lots of mucus, wheezing, shortness of breath especially with   
activity. Might need oxygen. Often from smoking combined with burn pit exposure, dust,   
chemicals, or other toxic exposures during service.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q155  
\- If NO → Skip to Q158 (next condition: Sinusitis)

\---

\#\#\# Question 155: Describe your COPD in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your breathing problems, cough, oxygen use, activity limitations..."  
\- \*\*Only show if Q154 \= Yes\*\*

\---

\#\#\# Question 156: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for COPD  
  \- No, this is a new claim  
\- \*\*Only show if Q154 \= Yes\*\*

\---

\#\#\# Question 157: \[COPD Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for COPD  
\- \*\*Only show if Q154 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q158 (next condition)

\---

\#\# CONDITION 28: SINUSITIS (CHRONIC RHINITIS)

\#\#\# Question 158: Do you suffer from Sinusitis?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
SINUSITIS (CHRONIC RHINITIS)  
Chronic sinus infections or inflammation. Constant nasal congestion, facial pain or pressure,   
headaches, post-nasal drip, reduced sense of smell. You might get sinus infections several   
times a year or have symptoms that never fully go away. Can be from burn pit exposure, dust,   
mold, or other environmental factors during service.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q159  
\- If NO → Skip to Q162 (next condition: TMJ)

\---

\#\#\# Question 159: Describe your Sinusitis in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your sinus symptoms, frequency of infections, treatments..."  
\- \*\*Only show if Q158 \= Yes\*\*

\---

\#\#\# Question 160: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Sinusitis  
  \- No, this is a new claim  
\- \*\*Only show if Q158 \= Yes\*\*

\---

\#\#\# Question 161: \[Sinusitis Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Sinusitis  
\- \*\*Only show if Q158 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q162 (next condition)

\---

\#\# CONDITION 29: TMJ (TEMPOROMANDIBULAR JOINT DISORDER)

\#\#\# Question 162: Do you suffer from TMJ?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
TMJ (TEMPOROMANDIBULAR JOINT DISORDER)  
Jaw pain, clicking, or popping when you open your mouth. Trouble chewing, jaw locking open   
or closed, headaches, ear pain. Your jaw might be misaligned or you might grind your teeth.   
Can be from combat injuries, dental problems during service, stress/PTSD causing teeth   
grinding, or damage from wearing mouthguards or gas masks.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q163  
\- If NO → Skip to Q166 (next condition: Vision Problems)

\---

\#\#\# Question 163: Describe your TMJ in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your jaw pain, clicking, limitations in opening your mouth, teeth grinding..."  
\- \*\*Only show if Q162 \= Yes\*\*

\---

\#\#\# Question 164: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for TMJ  
  \- No, this is a new claim  
\- \*\*Only show if Q162 \= Yes\*\*

\---

\#\#\# Question 165: \[TMJ Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for TMJ  
\- \*\*Only show if Q162 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q166 (next condition)

\---

\#\# CONDITION 30: VISION PROBLEMS

\#\#\# Question 166: Do you suffer from Vision Problems?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
VISION PROBLEMS (CATARACTS, GLAUCOMA, VISION LOSS)  
Chronic eye problems beyond just needing glasses. This includes cataracts (cloudy lens),   
glaucoma (eye pressure damage), partial vision loss, double vision, or severe dry eye.   
Might be from blast exposure, chemical exposures, traumatic brain injury, or other   
service-related causes.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q167  
\- If NO → Skip to Q170 (next condition: TBI)

\---

\#\#\# Question 167: Describe your Vision Problems in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your specific eye condition, vision limitations, treatments..."  
\- \*\*Only show if Q166 \= Yes\*\*

\---

\#\#\# Question 168: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Vision Problems  
  \- No, this is a new claim  
\- \*\*Only show if Q166 \= Yes\*\*

\---

\#\#\# Question 169: \[Vision Problems Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Vision Problems  
\- \*\*Only show if Q166 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q170 (next condition)

\---

\#\# CONDITION 31: TBI (TRAUMATIC BRAIN INJURY)

\#\#\# Question 170: Do you suffer from TBI?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
TBI (TRAUMATIC BRAIN INJURY)  
You had a head injury during service (blast exposure, vehicle accident, fall, hit in the head)   
and now have lasting problems. This might include: headaches, memory problems, trouble   
concentrating, sensitivity to light/noise, balance problems, mood changes, sleep issues.   
Even "mild" TBI (concussion) can have long-term effects.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q171  
\- If NO → Skip to Q174 (next condition: Vertigo)

\---

\#\#\# Question 171: Describe your TBI in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe the injury event, your ongoing symptoms, how it affects you..."  
\- \*\*Only show if Q170 \= Yes\*\*

\---

\#\#\# Question 172: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for TBI  
  \- No, this is a new claim  
\- \*\*Only show if Q170 \= Yes\*\*

\---

\#\#\# Question 173: \[TBI Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for TBI  
\- \*\*Only show if Q170 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q174 (next condition)

\---

\#\# CONDITION 32: VERTIGO/BALANCE PROBLEMS

\#\#\# Question 174: Do you suffer from Vertigo or Balance Problems?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
VERTIGO / BALANCE PROBLEMS (MENIERE'S DISEASE)  
You feel dizzy, like the room is spinning, or have trouble with balance. Might include nausea,   
feeling like you're going to fall, unsteadiness when walking. Can be from inner ear damage,   
blast exposure, head injuries, or Meniere's disease (which includes vertigo attacks, hearing   
loss, and ringing in ears).  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q175  
\- If NO → Skip to Q178 (next condition: Fibromyalgia)

\---

\#\#\# Question 175: Describe your Vertigo/Balance Problems in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your symptoms, how often it happens, what triggers it, falls..."  
\- \*\*Only show if Q174 \= Yes\*\*

\---

\#\#\# Question 176: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Vertigo/Balance Problems  
  \- No, this is a new claim  
\- \*\*Only show if Q174 \= Yes\*\*

\---

\#\#\# Question 177: \[Vertigo Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Vertigo/Balance Problems  
\- \*\*Only show if Q174 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q178 (next condition)

\---

\#\# CONDITION 33: FIBROMYALGIA

\#\#\# Question 178: Do you suffer from Fibromyalgia?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
FIBROMYALGIA  
Widespread chronic pain throughout your body \- it hurts everywhere. Along with pain, you have   
extreme fatigue, sleep problems, brain fog, trouble concentrating. Specific tender points on   
your body are especially painful when touched. Often described as "I hurt all over all the time."  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q179  
\- If NO → Skip to Q182 (next condition: Chronic Fatigue)

\---

\#\#\# Question 179: Describe your Fibromyalgia in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your pain, fatigue, where it hurts most, how it affects daily life..."  
\- \*\*Only show if Q178 \= Yes\*\*

\---

\#\#\# Question 180: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Fibromyalgia  
  \- No, this is a new claim  
\- \*\*Only show if Q178 \= Yes\*\*

\---

\#\#\# Question 181: \[Fibromyalgia Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Fibromyalgia  
\- \*\*Only show if Q178 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q182 (next condition)

\---

\#\# CONDITION 34: CHRONIC FATIGUE SYNDROME

\#\#\# Question 182: Do you suffer from Chronic Fatigue Syndrome?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
CHRONIC FATIGUE SYNDROME  
Extreme, persistent tiredness that doesn't improve with rest. You're exhausted all the time   
even after sleeping. Activity makes you worse (post-exertional malaise \- you're wiped out   
for days after doing things). Along with fatigue: brain fog, muscle pain, sleep problems,   
sore throat, swollen lymph nodes.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q183  
\- If NO → Skip to Q186 (next condition: Erectile Dysfunction)

\---

\#\#\# Question 183: Describe your Chronic Fatigue Syndrome in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your fatigue level, what makes it worse, how it limits you..."  
\- \*\*Only show if Q182 \= Yes\*\*

\---

\#\#\# Question 184: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Chronic Fatigue Syndrome  
  \- No, this is a new claim  
\- \*\*Only show if Q182 \= Yes\*\*

\---

\#\#\# Question 185: \[Chronic Fatigue Syndrome Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Chronic Fatigue Syndrome  
\- \*\*Only show if Q182 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q186 (next condition)

\---

\#\# CONDITION 35: ERECTILE DYSFUNCTION

\#\#\# Question 186: Do you suffer from Erectile Dysfunction?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
ERECTILE DYSFUNCTION  
Difficulty getting or maintaining an erection. This can be service-connected as secondary to   
PTSD, depression, diabetes, spinal injuries, medications, or other service-connected conditions.   
It's a common condition and important to claim because it significantly impacts quality of life   
and relationships.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q187  
\- If NO → Skip to Q190 (next condition: Prostate Problems)

\---

\#\#\# Question 187: Describe your Erectile Dysfunction in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe the issue, when it started, treatments tried, how it affects relationships..."  
\- \*\*Only show if Q186 \= Yes\*\*

\---

\#\#\# Question 188: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Erectile Dysfunction  
  \- No, this is a new claim  
\- \*\*Only show if Q186 \= Yes\*\*

\---

\#\#\# Question 189: \[Erectile Dysfunction Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Erectile Dysfunction  
\- \*\*Only show if Q186 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q190 (next condition)

\---

\#\# CONDITION 36: PROSTATE PROBLEMS

\#\#\# Question 190: Do you suffer from Prostate Problems?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
PROSTATE PROBLEMS (PROSTATITIS, BPH, CANCER)  
Problems with your prostate including: frequent/urgent urination (especially at night),   
difficulty urinating, weak stream, pain or burning during urination, pelvic pain. Can include   
prostatitis (inflammation), BPH (enlarged prostate), or prostate cancer. Prostate cancer can   
be presumptive for Agent Orange exposure.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q191  
\- If NO → Skip to Q194 (next condition: Kidney Disease)

\---

\#\#\# Question 191: Describe your Prostate Problems in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your symptoms, diagnosis, treatments, urinary problems..."  
\- \*\*Only show if Q190 \= Yes\*\*

\---

\#\#\# Question 192: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Prostate Problems  
  \- No, this is a new claim  
\- \*\*Only show if Q190 \= Yes\*\*

\---

\#\#\# Question 193: \[Prostate Problems Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Prostate Problems  
\- \*\*Only show if Q190 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q194 (next condition)

\---

\#\# CONDITION 37: KIDNEY DISEASE

\#\#\# Question 194: Do you suffer from Kidney Disease?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
KIDNEY DISEASE (CHRONIC KIDNEY DISEASE)  
Your kidneys aren't filtering waste properly. Might have decreased kidney function, protein   
in urine, high creatinine levels, need for dialysis. Can be from Agent Orange exposure, burn   
pit exposure, medications, or secondary to diabetes or hypertension. Symptoms might include   
fatigue, swelling, changes in urination.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q195  
\- If NO → Skip to Q198 (next condition: Hepatitis C)

\---

\#\#\# Question 195: Describe your Kidney Disease in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your kidney function, treatments, dialysis, how it affects you..."  
\- \*\*Only show if Q194 \= Yes\*\*

\---

\#\#\# Question 196: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Kidney Disease  
  \- No, this is a new claim  
\- \*\*Only show if Q194 \= Yes\*\*

\---

\#\#\# Question 197: \[Kidney Disease Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Kidney Disease  
\- \*\*Only show if Q194 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q198 (next condition)

\---

\#\# CONDITION 38: HEPATITIS C

\#\#\# Question 198: Do you suffer from Hepatitis C?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
HEPATITIS C  
A liver infection from the Hepatitis C virus. Many veterans contracted this from blood   
transfusions during service before proper screening, or from air gun immunizations. Can cause   
liver damage, cirrhosis, fatigue, jaundice. May have been treated and cleared, but can still   
be service-connected.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q199  
\- If NO → Skip to Q202 (next condition: Thyroid Problems)

\---

\#\#\# Question 199: Describe your Hepatitis C in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe when diagnosed, treatments, liver damage, current status..."  
\- \*\*Only show if Q198 \= Yes\*\*

\---

\#\#\# Question 200: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Hepatitis C  
  \- No, this is a new claim  
\- \*\*Only show if Q198 \= Yes\*\*

\---

\#\#\# Question 201: \[Hepatitis C Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Hepatitis C  
\- \*\*Only show if Q198 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q202 (next condition)

\---

\#\# CONDITION 39: THYROID PROBLEMS

\#\#\# Question 202: Do you suffer from Thyroid Problems?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
THYROID PROBLEMS (HYPOTHYROIDISM/HYPERTHYROIDISM)  
Your thyroid doesn't work correctly. Hypothyroidism (underactive): fatigue, weight gain,   
cold sensitivity, depression. Hyperthyroidism (overactive): anxiety, weight loss, rapid   
heartbeat, sweating. You take thyroid medication daily. Can be from burn pit exposure or   
radiation exposure during service.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q203  
\- If NO → Skip to Q206 (next condition: Cancer)

\---

\#\#\# Question 203: Describe your Thyroid Problems in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your thyroid condition, symptoms, medications, lab values..."  
\- \*\*Only show if Q202 \= Yes\*\*

\---

\#\#\# Question 204: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Thyroid Problems  
  \- No, this is a new claim  
\- \*\*Only show if Q202 \= Yes\*\*

\---

\#\#\# Question 205: \[Thyroid Problems Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Thyroid Problems  
\- \*\*Only show if Q202 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q206 (next condition)

\---

\#\# CONDITION 40: CANCER

\#\#\# Question 206: Do you suffer from Cancer?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
CANCER (ANY TYPE)  
Any type of cancer diagnosis. Many cancers are presumptive for Agent Orange exposure (including   
prostate, lung, bladder, and many others), burn pit exposure, or radiation exposure. Even if   
you're in remission or have been successfully treated, cancer can still be service-connected   
and rated.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q207  
\- If NO → Skip to Q210 (next condition: Gulf War Illness)

\---

\#\#\# Question 207: Describe your Cancer in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe the type of cancer, when diagnosed, treatments, current status..."  
\- \*\*Only show if Q206 \= Yes\*\*

\---

\#\#\# Question 208: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Cancer  
  \- No, this is a new claim  
\- \*\*Only show if Q206 \= Yes\*\*

\---

\#\#\# Question 209: \[Cancer Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Cancer  
\- \*\*Only show if Q206 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q210 (next condition)

\---

\#\# CONDITION 41: GULF WAR ILLNESS (CHRONIC MULTISYMPTOM ILLNESS)

\#\#\# Question 210: Do you suffer from Gulf War Illness?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
GULF WAR ILLNESS (CHRONIC MULTISYMPTOM ILLNESS)  
If you served in the Gulf War era (Southwest Asia theater from 1990-present), you may have   
unexplained chronic symptoms including: fatigue, pain, cognitive problems, gastrointestinal   
issues, respiratory problems, skin conditions. These don't fit a specific diagnosis but are   
recognized as Gulf War Illness or Chronic Multisymptom Illness.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q211  
\- If NO → Skip to Q214 (next condition: MST)

\---

\#\#\# Question 211: Describe your Gulf War Illness in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your various symptoms, when they started, how they affect you..."  
\- \*\*Only show if Q210 \= Yes\*\*

\---

\#\#\# Question 212: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Gulf War Illness  
  \- No, this is a new claim  
\- \*\*Only show if Q210 \= Yes\*\*

\---

\#\#\# Question 213: \[Gulf War Illness Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Gulf War Illness  
\- \*\*Only show if Q210 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q214 (next condition)

\---

\#\# CONDITION 42: MST (MILITARY SEXUAL TRAUMA)

\#\#\# Question 214: Do you suffer from conditions related to MST?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
MST (MILITARY SEXUAL TRAUMA)  
If you experienced sexual assault, sexual harassment, or sexual trauma during military service,   
you may be experiencing lasting mental health conditions as a result. This includes PTSD,   
depression, anxiety, and other conditions stemming from MST. Special considerations and   
protections apply to MST-related claims.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q215  
\- If NO → Skip to Q218 (next condition: Substance Abuse)

\---

\#\#\# Question 215: Describe your MST-related conditions in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe the mental health conditions you experience related to MST..."  
\- \*\*Only show if Q214 \= Yes\*\*  
\- \*\*Privacy Note:\*\* This information is protected and will be handled with special sensitivity

\---

\#\#\# Question 216: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for MST-related conditions  
  \- No, this is a new claim  
\- \*\*Only show if Q214 \= Yes\*\*

\---

\#\#\# Question 217: \[MST Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for MST-related conditions  
\- \*\*Only show if Q214 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q218 (next condition)

\---

\#\# CONDITION 43: SUBSTANCE ABUSE (IN REMISSION)

\#\#\# Question 218: Do you have Substance Abuse (in remission)?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
SUBSTANCE ABUSE (IN REMISSION)  
If you have a history of alcohol or drug abuse that developed as a result of service-connected   
conditions (especially PTSD, depression, chronic pain), this can be service-connected even if   
you're now in remission or recovery. The key is showing the substance abuse was secondary to   
your service-connected conditions.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q219  
\- If NO → Skip to Q222 (next condition: Dental/Oral Conditions)

\---

\#\#\# Question 219: Describe your Substance Abuse history in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your substance abuse history, recovery, connection to other conditions..."  
\- \*\*Only show if Q218 \= Yes\*\*

\---

\#\#\# Question 220: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Substance Abuse  
  \- No, this is a new claim  
\- \*\*Only show if Q218 \= Yes\*\*

\---

\#\#\# Question 221: \[Substance Abuse Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Substance Abuse  
\- \*\*Only show if Q218 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q222 (next condition)

\---

\#\# CONDITION 44: DENTAL/ORAL CONDITIONS

\#\#\# Question 222: Do you suffer from Dental or Oral Conditions?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
DENTAL/ORAL CONDITIONS  
Dental problems that stem from service-connected injuries or conditions. This includes: teeth   
lost/damaged from combat injuries, TMJ-related dental problems, GERD causing tooth decay,   
bruxism (teeth grinding) from PTSD, or dental problems from lack of treatment during service.   
Note: VA dental benefits have specific eligibility requirements.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q223  
\- If NO → Skip to Q226 (next condition: Scars)

\---

\#\#\# Question 223: Describe your Dental/Oral Conditions in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your dental problems, missing teeth, connection to other conditions..."  
\- \*\*Only show if Q222 \= Yes\*\*

\---

\#\#\# Question 224: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Dental/Oral Conditions  
  \- No, this is a new claim  
\- \*\*Only show if Q222 \= Yes\*\*

\---

\#\#\# Question 225: \[Dental Conditions Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Dental/Oral Conditions  
\- \*\*Only show if Q222 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q226 (next condition)

\---

\#\# CONDITION 45: SCARS (DISFIGURING OR PAINFUL)

\#\#\# Question 226: Do you have Scars that are disfiguring or painful?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Description to Display Above Options:\*\*  
\`\`\`  
SCARS (DISFIGURING OR PAINFUL)  
Scars from injuries, burns, or surgeries during service that are either: (1) on exposed areas   
like face, head, neck, hands and are disfiguring, or (2) cause ongoing pain, limit movement,   
or require ongoing treatment. Even surgical scars from service-connected surgeries can be rated.  
\`\`\`  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q227  
\- If NO → Skip to Q230 (Other Conditions section)

\---

\#\#\# Question 227: Describe your Scars in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe location, size, how they occurred, pain or limitations they cause..."  
\- \*\*Only show if Q226 \= Yes\*\*

\---

\#\#\# Question 228: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for Scars  
  \- No, this is a new claim  
\- \*\*Only show if Q226 \= Yes\*\*

\---

\#\#\# Question 229: \[Scars Condition Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Scars  
\- \*\*Only show if Q226 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q230 (Other Conditions)

\---

\# OTHER CONDITIONS SECTION

\#\#\# Question 230: Do you have any OTHER conditions not listed above?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Help Text:\*\* If you have conditions we didn't list, you can add up to 5 additional conditions here.  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q231 (Other Condition 1\)  
\- If NO → Skip to Final Module (Documents & Scheduling)

\---

\#\# OTHER CONDITION 1

\#\#\# Question 231: First Additional Condition \- Name  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes  
\- \*\*Placeholder:\*\* Enter the name of your condition  
\- \*\*Only show if Q230 \= Yes\*\*

\---

\#\#\# Question 232: Describe this condition in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your condition, symptoms, how it affects you..."  
\- \*\*Only show if Q230 \= Yes\*\*

\---

\#\#\# Question 233: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for this condition  
  \- No, this is a new claim  
\- \*\*Only show if Q230 \= Yes\*\*

\---

\#\#\# Question 234: \[Other Condition 1 Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Other Condition 1  
\- \*\*Only show if Q230 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q235

\---

\#\#\# Question 235: Do you have a SECOND additional condition?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes  
  \- No  
\- \*\*Only show if Q230 \= Yes\*\*

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q236 (Other Condition 2\)  
\- If NO → Skip to Final Module (Documents & Scheduling)

\---

\#\# OTHER CONDITION 2

\#\#\# Question 236: Second Additional Condition \- Name  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes  
\- \*\*Placeholder:\*\* Enter the name of your condition  
\- \*\*Only show if Q235 \= Yes\*\*

\---

\#\#\# Question 237: Describe this condition in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your condition, symptoms, how it affects you..."  
\- \*\*Only show if Q235 \= Yes\*\*

\---

\#\#\# Question 238: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for this condition  
  \- No, this is a new claim  
\- \*\*Only show if Q235 \= Yes\*\*

\---

\#\#\# Question 239: \[Other Condition 2 Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Other Condition 2  
\- \*\*Only show if Q235 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q240

\---

\#\#\# Question 240: Do you have a THIRD additional condition?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes  
  \- No  
\- \*\*Only show if Q235 \= Yes\*\*

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q241 (Other Condition 3\)  
\- If NO → Skip to Final Module (Documents & Scheduling)

\---

\#\# OTHER CONDITION 3

\#\#\# Question 241: Third Additional Condition \- Name  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes  
\- \*\*Placeholder:\*\* Enter the name of your condition  
\- \*\*Only show if Q240 \= Yes\*\*

\---

\#\#\# Question 242: Describe this condition in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your condition, symptoms, how it affects you..."  
\- \*\*Only show if Q240 \= Yes\*\*

\---

\#\#\# Question 243: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for this condition  
  \- No, this is a new claim  
\- \*\*Only show if Q240 \= Yes\*\*

\---

\#\#\# Question 244: \[Other Condition 3 Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Other Condition 3  
\- \*\*Only show if Q240 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q245

\---

\#\#\# Question 245: Do you have a FOURTH additional condition?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes  
  \- No  
\- \*\*Only show if Q240 \= Yes\*\*

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q246 (Other Condition 4\)  
\- If NO → Skip to Final Module (Documents & Scheduling)

\---

\#\# OTHER CONDITION 4

\#\#\# Question 246: Fourth Additional Condition \- Name  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes  
\- \*\*Placeholder:\*\* Enter the name of your condition  
\- \*\*Only show if Q245 \= Yes\*\*

\---

\#\#\# Question 247: Describe this condition in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your condition, symptoms, how it affects you..."  
\- \*\*Only show if Q245 \= Yes\*\*

\---

\#\#\# Question 248: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for this condition  
  \- No, this is a new claim  
\- \*\*Only show if Q245 \= Yes\*\*

\---

\#\#\# Question 249: \[Other Condition 4 Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Other Condition 4  
\- \*\*Only show if Q245 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Q250

\---

\#\#\# Question 250: Do you have a FIFTH additional condition?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes  
  \- No  
\- \*\*Only show if Q245 \= Yes\*\*

\*\*⚠️ LOGIC JUMP:\*\*  
\- If YES → Continue to Q251 (Other Condition 5\)  
\- If NO → Skip to Final Module (Documents & Scheduling)

\---

\#\# OTHER CONDITION 5

\#\#\# Question 251: Fifth Additional Condition \- Name  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes  
\- \*\*Placeholder:\*\* Enter the name of your condition  
\- \*\*Only show if Q250 \= Yes\*\*

\---

\#\#\# Question 252: Describe this condition in your own words  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe your condition, symptoms, how it affects you..."  
\- \*\*Only show if Q250 \= Yes\*\*

\---

\#\#\# Question 253: Is this a condition you already have a VA rating for?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I already have a rating for this condition  
  \- No, this is a new claim  
\- \*\*Only show if Q250 \= Yes\*\*

\---

\#\#\# Question 254: \[Other Condition 5 Builder Starts Here\]  
\- \*\*Note:\*\* Full 100-question condition builder for Other Condition 5  
\- \*\*Only show if Q250 \= Yes\*\*  
\- \*\*After completion:\*\* Continue to Final Module (Documents & Scheduling)

\---

\# END OF FILE 1

\*\*WHAT'S NEXT:\*\*  
After all condition screening and condition builders are complete, the quiz proceeds to:  
\- \*\*FILE 2:\*\* The 100-question Condition Builder Template (to be used for EACH condition they said "yes" to)  
\- \*\*FILE 3:\*\* Final Module with Documents & Scheduling, Result Page, Webhook Setup, and Builder Tips

\*\*QUESTION NUMBERING NOTE:\*\*  
The actual question numbers for the condition builders will depend on implementation. The numbers shown here (Q53, Q57, Q61, etc.) represent where builders START, but each builder is 100 questions long, so numbering will cascade significantly.

\*\*LOGIC FLOW SUMMARY:\*\*  
1\. User answers YES to a condition → They describe it → They indicate if already rated → They complete 100-question builder for that condition → Next condition  
2\. User answers NO to a condition → Skip directly to next condition  
3\. After all 45 listed conditions → "Other Conditions" section (up to 5 more)  
4\. After all conditions complete → Final module with documents and scheduling

\---

\*\*FILE 1 COMPLETE\*\* ✅

Please validate this structure before I proceed to FILE 2 (the 100-question condition builder template).

## \# FILE 2: CONDITION BUILDER TEMPLATE

\#\# 100-Question Pattern \- Repeats for EACH Condition

\*\*CRITICAL INSTRUCTIONS FOR BUILDER:\*\*

This 100-question pattern is used for EVERY condition the veteran says "yes" to in File 1\.

\*\*How to implement:\*\*  
1\. Build this pattern ONCE perfectly in Outgrow  
2\. For each condition from File 1 where the user answered "YES":  
   \- This entire 100-question block appears  
   \- The condition name dynamically populates from the screening question  
   \- All references to "this condition" refer to the specific condition being detailed

\*\*Variable Usage:\*\*  
\- When the template refers to {{CONDITION\_NAME}}, this should pull from the screening question  
\- For Tinnitus (Q50), use the answer from Q50  
\- For PTSD (Q54), use the answer from Q54  
\- And so on for each condition

\*\*Question Numbering:\*\*  
\- The numbers shown here (1-100) are relative to THIS condition builder  
\- In actual implementation, these will be sequential based on how many conditions come before  
\- Example: If Tinnitus is the first condition they claim, its builder might be Q53-152  
\- If PTSD is their second condition, its builder might be Q153-252

\---

\# CONDITION BUILDER \- QUESTIONS 1-100

\#\# SECTION 1: SERVICE CONNECTION TYPE

\#\#\# Question 1: How is \[CONDITION\_NAME\] connected to your military service?  
\- \*\*Question Type:\*\* Multi-Select (Checkboxes)  
\- \*\*Required:\*\* Yes (minimum 1\)  
\- \*\*Help Text:\*\* You can select multiple types if applicable. For example, a condition can be both directly caused by service AND made worse by another condition.  
\- \*\*Options:\*\*  
  \- Directly caused by an event or exposure during service  
  \- Caused by another service-connected condition (Secondary)  
  \- Made worse (aggravated) by military service  
  \- Presumptive (Agent Orange, burn pits, Camp Lejeune, Gulf War, radiation, etc.)

\*\*Display Logic:\*\* Based on selections, show relevant follow-up sections:  
\- If "Directly caused" is selected → Show Questions 2-3  
\- If "Caused by another condition" is selected → Show Questions 4-6  
\- If "Made worse" is selected → Show Questions 7-9  
\- If "Presumptive" is selected → No additional questions (it's self-explanatory)

\---

\#\# SECTION 2: PRIMARY SERVICE CONNECTION (If "Directly caused" selected)

\#\#\# Question 2: Describe the event or exposure that caused \[CONDITION\_NAME\]  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes (only if Q1 includes "Directly caused")  
\- \*\*Rows:\*\* 6  
\- \*\*Character Limit:\*\* 1000  
\- \*\*Only show if:\*\* Q1 includes "Directly caused by an event or exposure"  
\- \*\*Placeholder:\*\* (copy exactly)  
\`\`\`  
Describe what happened during your service that caused this condition.

Include:  
\- WHEN it happened (date or time period)  
\- WHERE you were (location, deployment, base)  
\- WHAT happened (the specific event, injury, or exposure)  
\- Your job/duties at the time  
\- Any witnesses

Example: "In March 2008 at FOB Salerno, Afghanistan, I was standing near an   
IED blast. The explosion threw me back about 10 feet and I hit my head on the   
MRAP. I was dazed and my ears were ringing for days. My squad leader SSG Johnson   
was there and helped me to the medic tent."  
\`\`\`

\---

\#\#\# Question 3: Was there any documentation of this event?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes (only if Q1 includes "Directly caused")  
\- \*\*Only show if:\*\* Q1 includes "Directly caused by an event or exposure"  
\- \*\*Options:\*\*  
  \- Yes, I have documentation  
  \- No, but it should be in my service records  
  \- No documentation exists  
\- \*\*Help Text:\*\* Documentation might include: incident reports, service treatment records, buddy statements, unit logs, etc.

\---

\#\# SECTION 3: SECONDARY SERVICE CONNECTION (If "Caused by another condition" selected)

\#\#\# Question 4: What service-connected condition CAUSED \[CONDITION\_NAME\]?  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q1 includes "Caused by another")  
\- \*\*Only show if:\*\* Q1 includes "Caused by another service-connected condition"  
\- \*\*Placeholder:\*\* e.g., "My service-connected PTSD caused this depression"  
\- \*\*Help Text:\*\* Name the PRIMARY service-connected condition that caused THIS condition

\---

\#\#\# Question 5: What is your current VA rating for the PRIMARY condition?  
\- \*\*Question Type:\*\* Single Select (Dropdown)  
\- \*\*Required:\*\* Yes (only if Q1 includes "Caused by another")  
\- \*\*Only show if:\*\* Q1 includes "Caused by another service-connected condition"  
\- \*\*Options:\*\*  
  \- 0% (service-connected but not compensable)  
  \- 10%  
  \- 20%  
  \- 30%  
  \- 40%  
  \- 50%  
  \- 60%  
  \- 70%  
  \- 80%  
  \- 90%  
  \- 100%  
  \- Not yet rated (claim pending)  
  \- Not service-connected (yet)

\---

\#\#\# Question 6: Explain how the primary condition CAUSED this condition  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes (only if Q1 includes "Caused by another")  
\- \*\*Only show if:\*\* Q1 includes "Caused by another service-connected condition"  
\- \*\*Rows:\*\* 6  
\- \*\*Character Limit:\*\* 1000  
\- \*\*Placeholder:\*\* (copy exactly)  
\`\`\`  
Explain the connection between your primary condition and THIS condition.

Example: "My service-connected PTSD causes severe depression. The nightmares,   
hypervigilance, and anxiety from PTSD have led to feelings of hopelessness,   
social isolation, and loss of interest in activities I used to enjoy. My VA   
psychiatrist has documented that my depression is secondary to PTSD."

Include:  
\- How the primary condition led to this condition  
\- When this condition developed in relation to the primary condition  
\- What doctors have said about the connection  
\`\`\`

\---

\#\# SECTION 4: AGGRAVATION (If "Made worse" selected)

\#\#\# Question 7: Did you have \[CONDITION\_NAME\] BEFORE military service?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes (only if Q1 includes "Made worse")  
\- \*\*Only show if:\*\* Q1 includes "Made worse (aggravated) by military service"  
\- \*\*Options:\*\*  
  \- Yes, I had this condition before service  
  \- No, it started during service but got worse  
\- \*\*Help Text:\*\* Aggravation means the condition existed before OR during service, but military service made it permanently worse

\---

\#\#\# Question 8: Describe the condition BEFORE service or before it was aggravated  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes (only if Q1 includes "Made worse")  
\- \*\*Only show if:\*\* Q1 includes "Made worse (aggravated) by military service"  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe how bad the condition was before service made it worse..."  
\- \*\*Help Text:\*\* What were your symptoms and limitations before military service made it worse?

\---

\#\#\# Question 9: How did military service make \[CONDITION\_NAME\] worse?  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes (only if Q1 includes "Made worse")  
\- \*\*Only show if:\*\* Q1 includes "Made worse (aggravated) by military service"  
\- \*\*Rows:\*\* 6  
\- \*\*Character Limit:\*\* 1000  
\- \*\*Placeholder:\*\* (copy exactly)  
\`\`\`  
Describe how military service permanently worsened this condition.

Include:  
\- Specific military activities that aggravated it  
\- How the condition changed (more severe, more frequent, new symptoms)  
\- Timeline of worsening  
\- Whether it returned to baseline after service (it should NOT have if truly aggravated)

Example: "I had mild knee pain in high school from basketball. During Army   
service, the constant running with heavy gear, jumping from vehicles, and   
airborne training caused severe damage. My knee now clicks constantly, gives   
out randomly, and I can't run at all. Before service, I could play sports   
with only occasional pain."  
\`\`\`

\---

\#\# SECTION 5: SYMPTOM ONSET

\#\#\# Question 10: When did you first notice symptoms of \[CONDITION\_NAME\]?  
\- \*\*Question Type:\*\* Date Picker (Month/Year)  
\- \*\*Required:\*\* Yes  
\- \*\*Format:\*\* MM/YYYY  
\- \*\*Help Text:\*\* Approximate date is fine if you don't remember exactly

\---

\#\#\# Question 11: Where were you when symptoms first started?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Still on active duty  
  \- Within 1 year of separation  
  \- 1-5 years after separation  
  \- More than 5 years after separation

\---

\#\# SECTION 6: DIAGNOSIS STATUS

\#\#\# Question 12: Have you been officially diagnosed with \[CONDITION\_NAME\]?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, formally diagnosed  
  \- No, but I have symptoms  
  \- Self-diagnosed / suspected  
\- \*\*Help Text:\*\* A formal diagnosis means a doctor or medical professional diagnosed you with this specific condition

\---

\#\#\# Question 13: Who diagnosed you with \[CONDITION\_NAME\]?  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q12 \= "Yes, formally diagnosed")  
\- \*\*Only show if:\*\* Q12 \= "Yes, formally diagnosed"  
\- \*\*Placeholder:\*\* e.g., "Dr. Smith at VA Medical Center" or "Dr. Johnson, private psychiatrist"  
\- \*\*Help Text:\*\* Provide the name and type of medical professional who diagnosed you

\---

\#\#\# Question 14: When were you diagnosed?  
\- \*\*Question Type:\*\* Date Picker (Month/Year)  
\- \*\*Required:\*\* Yes (only if Q12 \= "Yes, formally diagnosed")  
\- \*\*Only show if:\*\* Q12 \= "Yes, formally diagnosed"  
\- \*\*Format:\*\* MM/YYYY  
\- \*\*Help Text:\*\* Approximate date is fine

\---

\#\#\# Question 15: Do you have a copy of your diagnosis?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes (only if Q12 \= "Yes, formally diagnosed")  
\- \*\*Only show if:\*\* Q12 \= "Yes, formally diagnosed"  
\- \*\*Options:\*\*  
  \- Yes, I have documentation  
  \- No, but it's in my medical records  
  \- I need to request records

\---

\#\# SECTION 7: TREATMENT HISTORY

\#\#\# Question 16: Have you received any treatment for \[CONDITION\_NAME\]?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I've received treatment  
  \- No, I haven't received treatment  
\- \*\*Help Text:\*\* Treatment includes: doctor visits, therapy, medications, procedures, physical therapy, etc.

\*\*⚠️ LOGIC JUMP ON QUESTION 16:\*\*  
\- If "Yes" → Continue to Q17 (Treatment section \- Questions 17-38)  
\- If "No" → Skip to Q39 (No Treatment section \- Questions 39-40)

\---

\#\# SECTION 8A: NO TREATMENT PATH (If Q16 \= "No")

\#\#\# Question 17: Why haven't you received treatment for \[CONDITION\_NAME\]?  
\- \*\*Question Type:\*\* Multi-Select (Checkboxes)  
\- \*\*Required:\*\* Yes (only if Q16 \= "No")  
\- \*\*Only show if:\*\* Q16 \= "No, I haven't received treatment"  
\- \*\*Options:\*\*  
  \- Can't afford treatment  
  \- No insurance or VA healthcare  
  \- Don't have time  
  \- Don't trust doctors/VA  
  \- Tried to get appointments but couldn't  
  \- Didn't think it was serious enough  
  \- Embarrassed or don't want to admit the problem  
  \- Long wait times for VA care  
  \- Live too far from medical facilities  
  \- Other (please explain)

\---

\#\#\# Question 18: Please explain why you haven't received treatment  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes (only if Q16 \= "No")  
\- \*\*Only show if:\*\* Q16 \= "No, I haven't received treatment"  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Provide more detail about why you haven't gotten treatment for this condition..."

\*\*After Q18, skip to Q39 (Current Symptoms section)\*\*

\---

\#\# SECTION 8B: TREATMENT PATH (If Q16 \= "Yes") \- PROVIDERS

\*\*Note:\*\* This section allows up to 5 providers. Each provider has 4 questions.

\#\#\# PROVIDER 1 (Questions 19-22)

\#\#\# Question 19: First Provider \- Name and Type  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q16 \= "Yes")  
\- \*\*Only show if:\*\* Q16 \= "Yes, I've received treatment"  
\- \*\*Placeholder:\*\* e.g., "Dr. Sarah Johnson, Psychiatrist" or "VA Medical Center Mental Health Clinic"  
\- \*\*Help Text:\*\* Provide the doctor's name and specialty, or clinic name

\---

\#\#\# Question 20: First Provider \- Location  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q16 \= "Yes")  
\- \*\*Only show if:\*\* Q16 \= "Yes, I've received treatment"  
\- \*\*Placeholder:\*\* e.g., "VA Medical Center, Little Rock, AR" or "City, State"

\---

\#\#\# Question 21: First Provider \- Treatment Dates  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q16 \= "Yes")  
\- \*\*Only show if:\*\* Q16 \= "Yes, I've received treatment"  
\- \*\*Placeholder:\*\* e.g., "January 2020 \- Present" or "2018-2020"  
\- \*\*Help Text:\*\* Approximate dates are fine

\---

\#\#\# Question 22: First Provider \- What treatment did you receive?  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes (only if Q16 \= "Yes")  
\- \*\*Only show if:\*\* Q16 \= "Yes, I've received treatment"  
\- \*\*Rows:\*\* 3  
\- \*\*Character Limit:\*\* 300  
\- \*\*Placeholder:\*\* e.g., "Weekly therapy sessions, prescribed medications, physical therapy exercises..."

\---

\#\#\# Question 23: Do you have a SECOND provider to add?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes (only if Q16 \= "Yes")  
\- \*\*Only show if:\*\* Q16 \= "Yes, I've received treatment"  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP ON QUESTION 23:\*\*  
\- If "Yes" → Continue to Q24 (Provider 2\)  
\- If "No" → Skip to Q39 (Medications section)

\---

\#\#\# PROVIDER 2 (Questions 24-27)

\#\#\# Question 24: Second Provider \- Name and Type  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q23 \= "Yes")  
\- \*\*Only show if:\*\* Q23 \= "Yes"  
\- \*\*Placeholder:\*\* e.g., "Dr. Michael Chen, Orthopedic Surgeon"

\---

\#\#\# Question 25: Second Provider \- Location  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q23 \= "Yes")  
\- \*\*Only show if:\*\* Q23 \= "Yes"  
\- \*\*Placeholder:\*\* "City, State"

\---

\#\#\# Question 26: Second Provider \- Treatment Dates  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q23 \= "Yes")  
\- \*\*Only show if:\*\* Q23 \= "Yes"  
\- \*\*Placeholder:\*\* e.g., "2019-2021"

\---

\#\#\# Question 27: Second Provider \- What treatment did you receive?  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes (only if Q23 \= "Yes")  
\- \*\*Only show if:\*\* Q23 \= "Yes"  
\- \*\*Rows:\*\* 3  
\- \*\*Character Limit:\*\* 300  
\- \*\*Placeholder:\*\* "Describe the treatment..."

\---

\#\#\# Question 28: Do you have a THIRD provider to add?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes (only if Q23 \= "Yes")  
\- \*\*Only show if:\*\* Q23 \= "Yes"  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP ON QUESTION 28:\*\*  
\- If "Yes" → Continue to Q29 (Provider 3\)  
\- If "No" → Skip to Q39 (Medications section)

\---

\#\#\# PROVIDER 3 (Questions 29-32)

\#\#\# Question 29: Third Provider \- Name and Type  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q28 \= "Yes")  
\- \*\*Only show if:\*\* Q28 \= "Yes"  
\- \*\*Placeholder:\*\* e.g., "Physical Therapy Associates"

\---

\#\#\# Question 30: Third Provider \- Location  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q28 \= "Yes")  
\- \*\*Only show if:\*\* Q28 \= "Yes"  
\- \*\*Placeholder:\*\* "City, State"

\---

\#\#\# Question 31: Third Provider \- Treatment Dates  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q28 \= "Yes")  
\- \*\*Only show if:\*\* Q28 \= "Yes"  
\- \*\*Placeholder:\*\* e.g., "2020"

\---

\#\#\# Question 32: Third Provider \- What treatment did you receive?  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes (only if Q28 \= "Yes")  
\- \*\*Only show if:\*\* Q28 \= "Yes"  
\- \*\*Rows:\*\* 3  
\- \*\*Character Limit:\*\* 300  
\- \*\*Placeholder:\*\* "Describe the treatment..."

\---

\#\#\# Question 33: Do you have a FOURTH provider to add?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes (only if Q28 \= "Yes")  
\- \*\*Only show if:\*\* Q28 \= "Yes"  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP ON QUESTION 33:\*\*  
\- If "Yes" → Continue to Q34 (Provider 4\)  
\- If "No" → Skip to Q39 (Medications section)

\---

\#\#\# PROVIDER 4 (Questions 34-37)

\#\#\# Question 34: Fourth Provider \- Name and Type  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q33 \= "Yes")  
\- \*\*Only show if:\*\* Q33 \= "Yes"  
\- \*\*Placeholder:\*\* "Provider name and specialty"

\---

\#\#\# Question 35: Fourth Provider \- Location  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q33 \= "Yes")  
\- \*\*Only show if:\*\* Q33 \= "Yes"  
\- \*\*Placeholder:\*\* "City, State"

\---

\#\#\# Question 36: Fourth Provider \- Treatment Dates  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q33 \= "Yes")  
\- \*\*Only show if:\*\* Q33 \= "Yes"  
\- \*\*Placeholder:\*\* "Date range"

\---

\#\#\# Question 37: Fourth Provider \- What treatment did you receive?  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes (only if Q33 \= "Yes")  
\- \*\*Only show if:\*\* Q33 \= "Yes"  
\- \*\*Rows:\*\* 3  
\- \*\*Character Limit:\*\* 300  
\- \*\*Placeholder:\*\* "Describe the treatment..."

\---

\#\#\# Question 38: Do you have a FIFTH provider to add?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes (only if Q33 \= "Yes")  
\- \*\*Only show if:\*\* Q33 \= "Yes"  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP ON QUESTION 38:\*\*  
\- If "Yes" → Continue to Q39 (Provider 5\)  
\- If "No" → Skip to Q44 (Medications section)

\---

\#\#\# PROVIDER 5 (Questions 39-42)

\#\#\# Question 39: Fifth Provider \- Name and Type  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q38 \= "Yes")  
\- \*\*Only show if:\*\* Q38 \= "Yes"  
\- \*\*Placeholder:\*\* "Provider name and specialty"

\---

\#\#\# Question 40: Fifth Provider \- Location  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q38 \= "Yes")  
\- \*\*Only show if:\*\* Q38 \= "Yes"  
\- \*\*Placeholder:\*\* "City, State"

\---

\#\#\# Question 41: Fifth Provider \- Treatment Dates  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q38 \= "Yes")  
\- \*\*Only show if:\*\* Q38 \= "Yes"  
\- \*\*Placeholder:\*\* "Date range"

\---

\#\#\# Question 42: Fifth Provider \- What treatment did you receive?  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes (only if Q38 \= "Yes")  
\- \*\*Only show if:\*\* Q38 \= "Yes"  
\- \*\*Rows:\*\* 3  
\- \*\*Character Limit:\*\* 300  
\- \*\*Placeholder:\*\* "Describe the treatment..."

\---

\#\#\# Question 43: \[No additional provider question \- max 5 providers\]  
\- \*\*After Provider 5, automatically continue to Q44 (Medications)\*\*

\---

\#\# SECTION 9: MEDICATIONS

\#\#\# Question 44: Are you taking any medications for \[CONDITION\_NAME\]?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I take medications  
  \- No, I don't take medications

\*\*⚠️ LOGIC JUMP ON QUESTION 44:\*\*  
\- If "Yes" → Continue to Q45 (Medication 1\)  
\- If "No" → Skip to Q71 (Current Symptoms section)

\*\*Note:\*\* This section allows up to 10 medications. Each medication has 2 questions.

\---

\#\#\# MEDICATION 1 (Questions 45-46)

\#\#\# Question 45: First Medication \- Name and Dosage  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q44 \= "Yes")  
\- \*\*Only show if:\*\* Q44 \= "Yes, I take medications"  
\- \*\*Placeholder:\*\* e.g., "Sertraline 100mg" or "Ibuprofen 800mg"  
\- \*\*Help Text:\*\* Include the medication name and dosage if you know it

\---

\#\#\# Question 46: First Medication \- How often do you take it?  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q44 \= "Yes")  
\- \*\*Only show if:\*\* Q44 \= "Yes, I take medications"  
\- \*\*Placeholder:\*\* e.g., "Once daily" or "Three times per day" or "As needed"

\---

\#\#\# Question 47: Do you have a SECOND medication to add?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes (only if Q44 \= "Yes")  
\- \*\*Only show if:\*\* Q44 \= "Yes, I take medications"  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP ON QUESTION 47:\*\*  
\- If "Yes" → Continue to Q48 (Medication 2\)  
\- If "No" → Skip to Q71 (Current Symptoms)

\---

\#\#\# MEDICATION 2 (Questions 48-49)

\#\#\# Question 48: Second Medication \- Name and Dosage  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q47 \= "Yes")  
\- \*\*Only show if:\*\* Q47 \= "Yes"  
\- \*\*Placeholder:\*\* "Medication name and dosage"

\---

\#\#\# Question 49: Second Medication \- How often do you take it?  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q47 \= "Yes")  
\- \*\*Only show if:\*\* Q47 \= "Yes"  
\- \*\*Placeholder:\*\* "Frequency"

\---

\#\#\# Question 50: Do you have a THIRD medication to add?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes (only if Q47 \= "Yes")  
\- \*\*Only show if:\*\* Q47 \= "Yes"  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\* If "Yes" → Q51, If "No" → Q71

\---

\#\#\# MEDICATION 3 (Questions 51-52)

\#\#\# Question 51: Third Medication \- Name and Dosage  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q50 \= "Yes")  
\- \*\*Only show if:\*\* Q50 \= "Yes"

\---

\#\#\# Question 52: Third Medication \- How often?  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q50 \= "Yes")  
\- \*\*Only show if:\*\* Q50 \= "Yes"

\---

\#\#\# Question 53: Do you have a FOURTH medication to add?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes (only if Q50 \= "Yes")  
\- \*\*Only show if:\*\* Q50 \= "Yes"  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\* If "Yes" → Q54, If "No" → Q71

\---

\#\#\# MEDICATION 4 (Questions 54-55)

\#\#\# Question 54: Fourth Medication \- Name and Dosage  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q53 \= "Yes")  
\- \*\*Only show if:\*\* Q53 \= "Yes"

\---

\#\#\# Question 55: Fourth Medication \- How often?  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q53 \= "Yes")  
\- \*\*Only show if:\*\* Q53 \= "Yes"

\---

\#\#\# Question 56: Do you have a FIFTH medication to add?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes (only if Q53 \= "Yes")  
\- \*\*Only show if:\*\* Q53 \= "Yes"  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\* If "Yes" → Q57, If "No" → Q71

\---

\#\#\# MEDICATION 5 (Questions 57-58)

\#\#\# Question 57: Fifth Medication \- Name and Dosage  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q56 \= "Yes")  
\- \*\*Only show if:\*\* Q56 \= "Yes"

\---

\#\#\# Question 58: Fifth Medication \- How often?  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q56 \= "Yes")  
\- \*\*Only show if:\*\* Q56 \= "Yes"

\---

\#\#\# Question 59: Do you have a SIXTH medication to add?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes (only if Q56 \= "Yes")  
\- \*\*Only show if:\*\* Q56 \= "Yes"  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\* If "Yes" → Q60, If "No" → Q71

\---

\#\#\# MEDICATION 6 (Questions 60-61)

\#\#\# Question 60: Sixth Medication \- Name and Dosage  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q59 \= "Yes")  
\- \*\*Only show if:\*\* Q59 \= "Yes"

\---

\#\#\# Question 61: Sixth Medication \- How often?  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q59 \= "Yes")  
\- \*\*Only show if:\*\* Q59 \= "Yes"

\---

\#\#\# Question 62: Do you have a SEVENTH medication to add?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes (only if Q59 \= "Yes")  
\- \*\*Only show if:\*\* Q59 \= "Yes"  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\* If "Yes" → Q63, If "No" → Q71

\---

\#\#\# MEDICATION 7 (Questions 63-64)

\#\#\# Question 63: Seventh Medication \- Name and Dosage  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q62 \= "Yes")  
\- \*\*Only show if:\*\* Q62 \= "Yes"

\---

\#\#\# Question 64: Seventh Medication \- How often?  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q62 \= "Yes")  
\- \*\*Only show if:\*\* Q62 \= "Yes"

\---

\#\#\# Question 65: Do you have an EIGHTH medication to add?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes (only if Q62 \= "Yes")  
\- \*\*Only show if:\*\* Q62 \= "Yes"  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\* If "Yes" → Q66, If "No" → Q71

\---

\#\#\# MEDICATION 8 (Questions 66-67)

\#\#\# Question 66: Eighth Medication \- Name and Dosage  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q65 \= "Yes")  
\- \*\*Only show if:\*\* Q65 \= "Yes"

\---

\#\#\# Question 67: Eighth Medication \- How often?  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q65 \= "Yes")  
\- \*\*Only show if:\*\* Q65 \= "Yes"

\---

\#\#\# Question 68: Do you have a NINTH medication to add?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes (only if Q65 \= "Yes")  
\- \*\*Only show if:\*\* Q65 \= "Yes"  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\* If "Yes" → Q69, If "No" → Q71

\---

\#\#\# MEDICATION 9 (Questions 69-70)

\#\#\# Question 69: Ninth Medication \- Name and Dosage  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q68 \= "Yes")  
\- \*\*Only show if:\*\* Q68 \= "Yes"

\---

\#\#\# Question 70: Ninth Medication \- How often?  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q68 \= "Yes")  
\- \*\*Only show if:\*\* Q68 \= "Yes"

\---

\#\#\# Question 71: Do you have a TENTH medication to add?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes (only if Q68 \= "Yes")  
\- \*\*Only show if:\*\* Q68 \= "Yes"  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP:\*\* If "Yes" → Q72, If "No" → Q75 (Current Symptoms)

\---

\#\#\# MEDICATION 10 (Questions 72-73)

\#\#\# Question 72: Tenth Medication \- Name and Dosage  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q71 \= "Yes")  
\- \*\*Only show if:\*\* Q71 \= "Yes"

\---

\#\#\# Question 73: Tenth Medication \- How often?  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q71 \= "Yes")  
\- \*\*Only show if:\*\* Q71 \= "Yes"

\---

\#\#\# Question 74: \[No additional medication question \- max 10 medications\]  
\- \*\*After Medication 10, automatically continue to Q75 (Current Symptoms)\*\*

\---

\#\# SECTION 10: CURRENT SYMPTOMS

\#\#\# Question 75: Describe your current symptoms of \[CONDITION\_NAME\]  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 8  
\- \*\*Character Limit:\*\* 2000  
\- \*\*Placeholder:\*\* (copy exactly)  
\`\`\`  
Describe your symptoms in detail. Be specific and thorough.

Include:  
\- What you physically or mentally experience  
\- How severe the symptoms are  
\- When symptoms occur (constant, certain times, triggered by specific things)  
\- What makes symptoms better or worse  
\- Any patterns you've noticed

Example for back pain: "I have constant dull aching in my lower back that gets   
worse when I stand or walk for more than 30 minutes. Sharp stabbing pain shoots   
down my right leg when I bend over or lift anything. Mornings are worst \- I'm   
very stiff and it takes 30+ minutes to loosen up. Cold weather makes everything   
worse. The pain is always at least 4/10, but several times a week it spikes to   
8/10 where I can barely move."  
\`\`\`

\---

\#\#\# Question 76: How often do you experience symptoms?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Constant (24/7, always present)  
  \- Daily  
  \- Several times per week  
  \- Weekly  
  \- Several times per month  
  \- Monthly or less

\---

\#\#\# Question 77: On a scale of 1-10, what is your AVERAGE pain/symptom level?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons or Slider)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\* 1, 2, 3, 4, 5, 6, 7, 8, 9, 10  
\- \*\*Help Text:\*\* 1 \= barely noticeable, 10 \= worst possible

\---

\#\#\# Question 78: On a scale of 1-10, what is your WORST pain/symptom level?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons or Slider)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\* 1, 2, 3, 4, 5, 6, 7, 8, 9, 10  
\- \*\*Help Text:\*\* The highest level your symptoms reach during flare-ups or bad days

\---

\#\# SECTION 11: LIFE IMPACT \- WORK

\#\#\# Question 79: How does \[CONDITION\_NAME\] affect your ability to work?  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 6  
\- \*\*Character Limit:\*\* 1000  
\- \*\*Placeholder:\*\* (copy exactly)  
\`\`\`  
Describe specific ways this condition affects your work or ability to work.

Include:  
\- Job tasks you can't do or struggle with  
\- Accommodations you need  
\- Days missed due to this condition  
\- Performance issues caused by symptoms  
\- If you had to change jobs or stop working

Example: "I work in construction but my back pain makes it impossible to lift   
materials over 20 lbs. I can't bend or squat repeatedly anymore. I've missed   
15+ days this year due to severe flare-ups. My boss has had to reassign me to   
lighter duties which means less pay. I'm worried I'll have to quit this career   
entirely."

If not working: Explain why this condition prevents employment.  
\`\`\`

\---

\#\# SECTION 12: LIFE IMPACT \- DAILY ACTIVITIES

\#\#\# Question 80: How does \[CONDITION\_NAME\] affect your daily activities and self-care?  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 6  
\- \*\*Character Limit:\*\* 1000  
\- \*\*Placeholder:\*\* (copy exactly)  
\`\`\`  
Describe how this condition affects everyday activities.

Include:  
\- Personal care (showering, dressing, grooming)  
\- Household tasks (cleaning, cooking, laundry, yard work)  
\- Driving or transportation  
\- Shopping and errands  
\- Things you can no longer do or need help with

Example: "I can't vacuum or mop anymore \- my back pain is too severe. My wife   
has to do all the laundry because I can't bend to load/unload the washer.   
I can't mow the lawn. Long drives are impossible \- I have to stop every 30   
minutes to stretch. I need help putting on socks and shoes in the morning."  
\`\`\`

\---

\#\# SECTION 13: LIFE IMPACT \- RELATIONSHIPS

\#\#\# Question 81: How does \[CONDITION\_NAME\] affect your relationships and family life?  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 6  
\- \*\*Character Limit:\*\* 1000  
\- \*\*Placeholder:\*\* (copy exactly)  
\`\`\`  
Describe how this condition affects your relationships.

Include:  
\- Impact on marriage/romantic relationships  
\- Ability to care for or play with children  
\- Social withdrawal or isolation  
\- Mood changes affecting family  
\- Activities you can't do with loved ones

Example: "I can't play with my kids anymore \- can't get on the floor or roughhouse.   
My wife is frustrated because she has to do everything around the house. I'm irritable   
from constant pain which causes arguments. I've stopped going to family gatherings   
because sitting for long periods hurts too much. I feel like a burden."  
\`\`\`

\---

\#\# SECTION 14: LIFE IMPACT \- SLEEP

\#\#\# Question 82: How does \[CONDITION\_NAME\] affect your sleep?  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* (copy exactly)  
\`\`\`  
Describe how this condition affects your sleep.

Include:  
\- Difficulty falling asleep or staying asleep  
\- How many hours of sleep you actually get  
\- Pain or symptoms that wake you up  
\- Need for special sleeping positions or equipment

Example: "Pain wakes me up 3-4 times per night when I roll over. I can only   
sleep on my left side with a pillow between my knees. I average 4-5 hours of   
broken sleep per night. I'm exhausted all the time."  
\`\`\`

\---

\#\# SECTION 15: LIFE IMPACT \- SOCIAL/RECREATIONAL

\#\#\# Question 83: How does \[CONDITION\_NAME\] affect your social life and hobbies?  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes  
\- \*\*Rows:\*\* 6  
\- \*\*Character Limit:\*\* 1000  
\- \*\*Placeholder:\*\* (copy exactly)  
\`\`\`  
Describe how this condition affects your social life and activities you enjoy.

Include:  
\- Hobbies or activities you've had to give up  
\- Social events you avoid or can't attend  
\- Sports or recreation you can no longer do  
\- Isolation or withdrawal from friends

Example: "I used to love hiking and camping but can't do that anymore. I've   
stopped going to church because sitting in pews for an hour is too painful.   
I rarely see friends anymore \- I'm embarrassed to constantly cancel plans when   
my back flares up. I had to quit my bowling league. I feel like I've lost who   
I was before this condition."  
\`\`\`

\---

\#\# SECTION 16: FREQUENCY OF FLARE-UPS

\#\#\# Question 84: Does \[CONDITION\_NAME\] have flare-ups or episodes where it gets worse?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I have flare-ups  
  \- No, symptoms are consistent  
\- \*\*Help Text:\*\* Flare-ups are periods when symptoms get significantly worse than your baseline

\---

\#\#\# Question 85: How often do you have flare-ups?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes (only if Q84 \= "Yes")  
\- \*\*Only show if:\*\* Q84 \= "Yes, I have flare-ups"  
\- \*\*Options:\*\*  
  \- Multiple times per week  
  \- Weekly  
  \- 2-3 times per month  
  \- Monthly  
  \- Every few months  
  \- Rarely (few times per year)

\---

\#\#\# Question 86: How long do flare-ups typically last?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes (only if Q84 \= "Yes")  
\- \*\*Only show if:\*\* Q84 \= "Yes, I have flare-ups"  
\- \*\*Options:\*\*  
  \- Hours  
  \- 1-2 days  
  \- 3-7 days  
  \- 1-2 weeks  
  \- Longer than 2 weeks

\---

\#\#\# Question 87: What triggers your flare-ups?  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes (only if Q84 \= "Yes")  
\- \*\*Only show if:\*\* Q84 \= "Yes, I have flare-ups"  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* "Describe what causes your symptoms to get worse: physical activities, stress, weather, specific situations, etc."

\---

\#\# SECTION 17: BUDDY STATEMENTS

\#\#\# Question 88: Do you have someone who can provide a statement about \[CONDITION\_NAME\]?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Options:\*\*  
  \- Yes, I have someone who can provide a statement  
  \- No, I don't have anyone  
\- \*\*Help Text:\*\* Buddy statements are written statements from people who have witnessed your condition and its impact. This can be family, friends, fellow service members, coworkers, etc.

\*\*⚠️ LOGIC JUMP ON QUESTION 88:\*\*  
\- If "Yes" → Continue to Q89 (Buddy Statement section)  
\- If "No" → Skip to Q100 (Additional Information)

\---

\#\# SECTION 18: BUDDY STATEMENT DETAILS (If Q88 \= "Yes")

\*\*Note:\*\* This section allows up to 3 buddy statements. Each buddy has 4 questions.

\#\#\# BUDDY 1 (Questions 89-92)

\#\#\# Question 89: First Buddy Statement \- Person's Name  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q88 \= "Yes")  
\- \*\*Only show if:\*\* Q88 \= "Yes, I have someone"  
\- \*\*Placeholder:\*\* "First Last Name"

\---

\#\#\# Question 90: First Buddy \- Relationship to you  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q88 \= "Yes")  
\- \*\*Only show if:\*\* Q88 \= "Yes, I have someone"  
\- \*\*Placeholder:\*\* e.g., "Spouse", "Fellow service member", "Best friend", "Coworker"

\---

\#\#\# Question 91: First Buddy \- Contact Information  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q88 \= "Yes")  
\- \*\*Only show if:\*\* Q88 \= "Yes, I have someone"  
\- \*\*Placeholder:\*\* "Email address or phone number"  
\- \*\*Help Text:\*\* We may need to contact them to get their written statement

\---

\#\#\# Question 92: First Buddy \- What have they witnessed about your condition?  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes (only if Q88 \= "Yes")  
\- \*\*Only show if:\*\* Q88 \= "Yes, I have someone"  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500  
\- \*\*Placeholder:\*\* (copy exactly)  
\`\`\`  
Describe what this person has witnessed about your condition.

Include:  
\- How long they've known you  
\- What they've observed (symptoms, limitations, changes)  
\- Specific examples of how your condition affects you

Example: "My wife has lived with me for 15 years and has seen my back pain   
get progressively worse. She helps me put on socks every morning because I   
can't bend. She's taken over all household chores. She's witnessed me unable   
to get out of bed during severe flare-ups."  
\`\`\`

\---

\#\#\# Question 93: Do you have a SECOND person who can provide a buddy statement?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes (only if Q88 \= "Yes")  
\- \*\*Only show if:\*\* Q88 \= "Yes, I have someone"  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP ON QUESTION 93:\*\*  
\- If "Yes" → Continue to Q94 (Buddy 2\)  
\- If "No" → Skip to Q100 (Additional Information)

\---

\#\#\# BUDDY 2 (Questions 94-97)

\#\#\# Question 94: Second Buddy Statement \- Person's Name  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q93 \= "Yes")  
\- \*\*Only show if:\*\* Q93 \= "Yes"

\---

\#\#\# Question 95: Second Buddy \- Relationship to you  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q93 \= "Yes")  
\- \*\*Only show if:\*\* Q93 \= "Yes"

\---

\#\#\# Question 96: Second Buddy \- Contact Information  
\- \*\*Question Type:\*\* Text Input  
\- \*\*Required:\*\* Yes (only if Q93 \= "Yes")  
\- \*\*Only show if:\*\* Q93 \= "Yes"

\---

\#\#\# Question 97: Second Buddy \- What have they witnessed?  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes (only if Q93 \= "Yes")  
\- \*\*Only show if:\*\* Q93 \= "Yes"  
\- \*\*Rows:\*\* 4  
\- \*\*Character Limit:\*\* 500

\---

\#\#\# Question 98: Do you have a THIRD person who can provide a buddy statement?  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes (only if Q93 \= "Yes")  
\- \*\*Only show if:\*\* Q93 \= "Yes"  
\- \*\*Options:\*\*  
  \- Yes  
  \- No

\*\*⚠️ LOGIC JUMP ON QUESTION 98:\*\*  
\- If "Yes" → Continue to Q99 (Buddy 3\)  
\- If "No" → Skip to Q100 (Additional Information)

\---

\#\#\# BUDDY 3 (Questions 99-102) \- Wait, we only have room for Q99\!

Let me revise \- we need to fit 3 buddies in questions 89-99, then Q100 is Additional Info.

Let me recalculate:   
\- Buddy 1: Q89-92 (4 questions)  
\- Q93: Add another?  
\- Buddy 2: Q94-96 (3 questions \- we can skip "what they witnessed" detail)  
\- Q97: Add another?  
\- Buddy 3: Q98-99 (2 questions minimum)  
\- Q100: Additional info

Actually, let's keep it simple:

\#\#\# BUDDY 3 (Questions 99-99)

\#\#\# Question 99: Third Buddy \- Name, Relationship, and Contact  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* Yes (only if Q98 \= "Yes")  
\- \*\*Only show if:\*\* Q98 \= "Yes"  
\- \*\*Rows:\*\* 3  
\- \*\*Placeholder:\*\* "Name:\\nRelationship:\\nContact Info:\\nWhat they've witnessed:"

\---

\#\# SECTION 19: ADDITIONAL INFORMATION

\#\#\# Question 100: Is there anything else important about \[CONDITION\_NAME\] that we should know?  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* No  
\- \*\*Rows:\*\* 6  
\- \*\*Character Limit:\*\* 1000  
\- \*\*Placeholder:\*\* (copy exactly)  
\`\`\`  
Add any additional information about this condition that we haven't covered.

This might include:  
\- Upcoming surgeries or procedures  
\- Recent changes in symptoms  
\- Important details about service connection  
\- Anything else you think is relevant to your claim  
\`\`\`

\---

\# END OF CONDITION BUILDER TEMPLATE

\*\*🎉 This completes the 100-question condition builder\!\*\*

\---

\# IMPLEMENTATION NOTES FOR BUILDER

\#\# How This Template Works:

1\. \*\*For EACH condition\*\* the veteran says "YES" to in File 1, this entire 100-question pattern repeats  
2\. The condition name dynamically fills in from the screening question  
3\. All logic jumps and conditional displays work the same for every condition

\#\# Question Numbering in Practice:

The question numbers 1-100 shown here are \*\*relative to this condition builder\*\*.

In actual implementation:  
\- \*\*First condition claimed\*\* (e.g., Tinnitus): These might be actual Q53-152  
\- \*\*Second condition claimed\*\* (e.g., PTSD): These might be actual Q153-252  
\- \*\*Third condition claimed\*\*: These might be actual Q253-352  
\- And so on...

\#\# Key Logic Jumps to Test:

1\. \*\*Q1 (Service Connection Type)\*\* \- Shows different follow-up sections based on selections  
2\. \*\*Q16 (Treatment Yes/No)\*\* \- Branches to either treatment section OR no-treatment section  
3\. \*\*Q23, Q28, Q33, Q38\*\* \- Provider "add another" logic (max 5 providers)  
4\. \*\*Q44 (Medications Yes/No)\*\* \- Shows medication section or skips it  
5\. \*\*Q47, Q50, Q53, Q56, Q59, Q62, Q65, Q68, Q71\*\* \- Medication "add another" logic (max 10 medications)  
6\. \*\*Q88 (Buddy Statements Yes/No)\*\* \- Shows buddy statement section or skips it  
7\. \*\*Q93, Q98\*\* \- Buddy "add another" logic (max 3 buddies)

\#\# Testing Checklist for ONE Condition Builder:

\- \[ \] All conditional sections display/hide correctly based on Q1  
\- \[ \] Treatment vs No Treatment paths work (Q16)  
\- \[ \] Provider section allows up to 5, then stops  
\- \[ \] Medication section allows up to 10, then stops  
\- \[ \] Buddy statement section allows up to 3, then stops  
\- \[ \] All text areas have correct character limits  
\- \[ \] All required fields actually require input  
\- \[ \] Q100 (Additional Info) is optional, not required  
\- \[ \] After Q100, quiz proceeds to NEXT condition (if any) or to Final Module

\---

## \# FILE 3: FINAL MODULE, COMPLETION & BUILDER GUIDANCE

\#\# Documents, Scheduling, Result Page, Webhook, and Build Instructions

\---

\# MODULE 4: DOCUMENTS & SCHEDULING

\*\*IMPORTANT:\*\* These questions appear AFTER all condition builders are complete.

\#\#\# Question 1: Upload Supporting Documents (Optional)  
\- \*\*Question Type:\*\* File Upload  
\- \*\*Required:\*\* No  
\- \*\*Accepted Types:\*\* PDF, JPG, PNG, DOC, DOCX  
\- \*\*Max Size:\*\* 25MB per file  
\- \*\*Multiple Files:\*\* Yes (allow multiple uploads)  
\- \*\*Help Text:\*\* If you have medical records, diagnosis letters, treatment notes, or other supporting documents, you can upload them here. This is optional \- we can also request records on your behalf.

\---

\#\#\# Question 2: Schedule Your Consultation Call  
\- \*\*Question Type:\*\* Single Select (Radio Buttons)  
\- \*\*Required:\*\* Yes  
\- \*\*Help Text:\*\* Select your preferred consultation time. Our team will call you at this time to review your claim documents and answer questions.  
\- \*\*Options:\*\*  
  \- Morning (9am-12pm ET)  
  \- Afternoon (12pm-3pm ET)  
  \- Evening (3pm-6pm ET)  
  \- I'll call to schedule later

\---

\#\#\# Question 3: Additional Notes or Questions  
\- \*\*Question Type:\*\* Text Area  
\- \*\*Required:\*\* No  
\- \*\*Rows:\*\* 6  
\- \*\*Character Limit:\*\* 1000  
\- \*\*Placeholder:\*\* Is there anything else you'd like us to know before your consultation call? Any questions or concerns?

\---

\# RESULT PAGE (THANK YOU SCREEN)

\*\*Headline:\*\* ✅ Your Comprehensive VA Claim Submission is Complete\!

\*\*Subheadline:\*\* Thank you for your service and for trusting us with your claim.

\*\*Body Text:\*\* (copy exactly \- use dynamic variables where indicated)  
\`\`\`  
Thank you, {{NAME\_FROM\_Q1}}\! We've received your complete intake.

📋 YOUR SUBMISSION SUMMARY:  
\- {{NUMBER\_OF\_CONDITIONS}} condition(s) claimed  
\- Comprehensive details provided for each condition  
\- {{NUMBER\_OF\_DOCUMENTS}} supporting document(s) uploaded  
\- Preferred consultation time: {{CONSULTATION\_TIME\_FROM\_Q2}}

🎉 WHAT HAPPENS NEXT:

STEP 1: CONFIRMATION EMAIL (Within 5 Minutes)  
You'll receive a detailed confirmation email with:  
\- Complete summary of all conditions you submitted  
\- Your consultation call details  
\- Client portal access link  
\- Contact information if you have questions

STEP 2: DOCUMENT GENERATION (24-48 Hours)  
Our expert team will generate your personalized claim documents:  
\- Personal Statement for each condition  
\- Nexus Letters (where applicable and beneficial)  
\- Complete VA claim package with proper forms  
\- Evidence summary and recommendations

STEP 3: YOUR CONSULTATION CALL  
Preferred Time: {{CONSULTATION\_TIME\_FROM\_Q2}}  
Phone Number: {{PHONE\_FROM\_Q3}}

During this call, we will:  
\- Review your personalized claim documents  
\- Explain our recommendations  
\- Answer all your questions  
\- Discuss next steps for submission  
\- Provide timeline expectations

STEP 4: FINAL REVIEW & SUBMISSION  
After your consultation call:  
\- You'll receive final documents ready for VA submission  
\- We'll guide you through the submission process  
\- You'll have ongoing support as your claim is processed

📞 QUESTIONS BEFORE YOUR CALL?  
Call us at: (XXX) XXX-XXXX  
Email us at: support@vaclaimsacademy.com

💪 WHAT MAKES YOUR CLAIM STRONG:  
You've provided comprehensive information about your conditions, their connection to   
service, and their impact on your life. This detailed information allows us to build   
the strongest possible case for your VA disability benefits.

You've taken an important step toward getting the benefits you've earned through your   
service. We're honored to help you through this process.

Thank you for your service,  
The VA Claims Academy Team  
\`\`\`

\*\*Primary CTA Button:\*\* Access Your Client Portal    
\*\*Button Link:\*\* \[Portal URL provided by client\]

\*\*Secondary CTA Button:\*\* Download Submission Summary PDF    
\*\*Button Action:\*\* Generate/download PDF summary of their submission

\---

\# BUILDER CHECKLIST

\#\# ✅ BEFORE YOU START:

\- \[ \] Confirmed Outgrow plan supports 500+ questions  
\- \[ \] Auto-save feature is enabled (CRITICAL)  
\- \[ \] Save & resume feature is enabled  
\- \[ \] Mobile optimization is turned on  
\- \[ \] Progress bar is enabled  
\- \[ \] Planned 3-5 days of focused build time

\---

\#\# ✅ MODULE 1: VETERAN PROFILE (Q1-48)

\- \[ \] Questions 1-8: Contact info and military service created  
\- \[ \] Date pickers use dropdown for year selection (1950-2025), not calendar  
\- \[ \] Q8 has "Currently Serving" checkbox option  
\- \[ \] Questions 9-47: Job titles section created (up to 10 job titles)  
\- \[ \] Logic Jumps implemented on Q12, Q16, Q20, Q24, Q28, Q32, Q36, Q40, Q44  
\- \[ \] All "add another job" logic jumps point to Q48 when "No"  
\- \[ \] Q47 (10th job title) does NOT have "add another" \- always goes to Q48  
\- \[ \] Q48: Duty stations text area created with proper placeholder text

\*\*Test:\*\* Complete profile with 1 job title (should skip Q13-47 and go to Q48)    
\*\*Test:\*\* Complete profile with 3 job titles (should show Q9-20, skip Q21-47)

\---

\#\# ✅ MODULE 2: CONDITION SCREENING (Q49-254+)

\#\#\# Instructions Section:  
\- \[ \] Q49: Text block with condition screening instructions

\#\#\# All 45 Main Conditions:  
\- \[ \] Tinnitus (Q50-52) \+ builder placeholder  
\- \[ \] PTSD (Q54-56) \+ builder placeholder  
\- \[ \] Depression (Q58-60) \+ builder placeholder  
\- \[ \] Anxiety (Q62-64) \+ builder placeholder  
\- \[ \] Sleep Apnea (Q66-68) \+ builder placeholder  
\- \[ \] Migraine Headaches (Q70-72) \+ builder placeholder  
\- \[ \] Back Pain (Q74-76) \+ builder placeholder  
\- \[ \] Neck Pain (Q78-80) \+ builder placeholder  
\- \[ \] Knee Pain (Q82-84) \+ builder placeholder  
\- \[ \] Shoulder Pain (Q86-88) \+ builder placeholder  
\- \[ \] Hip Pain (Q90-92) \+ builder placeholder  
\- \[ \] Ankle Pain (Q94-96) \+ builder placeholder  
\- \[ \] Foot Pain (Q98-100) \+ builder placeholder  
\- \[ \] Elbow Pain (Q102-104) \+ builder placeholder  
\- \[ \] Wrist Pain (Q106-108) \+ builder placeholder  
\- \[ \] Hand/Finger Pain (Q110-112) \+ builder placeholder  
\- \[ \] Radiculopathy (Q114-116) \+ builder placeholder  
\- \[ \] Hearing Loss (Q118-120) \+ builder placeholder  
\- \[ \] IBS (Q122-124) \+ builder placeholder  
\- \[ \] GERD (Q126-128) \+ builder placeholder  
\- \[ \] Diabetes Type 2 (Q130-132) \+ builder placeholder  
\- \[ \] Hypertension (Q134-136) \+ builder placeholder  
\- \[ \] Heart Disease (Q138-140) \+ builder placeholder  
\- \[ \] Peripheral Neuropathy (Q142-144) \+ builder placeholder  
\- \[ \] Skin Conditions (Q146-148) \+ builder placeholder  
\- \[ \] Asthma (Q150-152) \+ builder placeholder  
\- \[ \] COPD (Q154-156) \+ builder placeholder  
\- \[ \] Sinusitis (Q158-160) \+ builder placeholder  
\- \[ \] TMJ (Q162-164) \+ builder placeholder  
\- \[ \] Vision Problems (Q166-168) \+ builder placeholder  
\- \[ \] TBI (Q170-172) \+ builder placeholder  
\- \[ \] Vertigo (Q174-176) \+ builder placeholder  
\- \[ \] Fibromyalgia (Q178-180) \+ builder placeholder  
\- \[ \] Chronic Fatigue (Q182-184) \+ builder placeholder  
\- \[ \] Erectile Dysfunction (Q186-188) \+ builder placeholder  
\- \[ \] Prostate Problems (Q190-192) \+ builder placeholder  
\- \[ \] Kidney Disease (Q194-196) \+ builder placeholder  
\- \[ \] Hepatitis C (Q198-200) \+ builder placeholder  
\- \[ \] Thyroid Problems (Q202-204) \+ builder placeholder  
\- \[ \] Cancer (Q206-208) \+ builder placeholder  
\- \[ \] Gulf War Illness (Q210-212) \+ builder placeholder  
\- \[ \] MST (Q214-216) \+ builder placeholder  
\- \[ \] Substance Abuse (Q218-220) \+ builder placeholder  
\- \[ \] Dental/Oral (Q222-224) \+ builder placeholder  
\- \[ \] Scars (Q226-228) \+ builder placeholder

\#\#\# Other Conditions Section:  
\- \[ \] Q230: "Do you have other conditions?" Yes/No  
\- \[ \] Other Condition 1 (Q231-234) \+ builder placeholder  
\- \[ \] Q235: "Add another?" logic jump  
\- \[ \] Other Condition 2 (Q236-239) \+ builder placeholder  
\- \[ \] Q240: "Add another?" logic jump  
\- \[ \] Other Condition 3 (Q241-244) \+ builder placeholder  
\- \[ \] Q245: "Add another?" logic jump  
\- \[ \] Other Condition 4 (Q246-249) \+ builder placeholder  
\- \[ \] Q250: "Add another?" logic jump  
\- \[ \] Other Condition 5 (Q251-254) \+ builder placeholder

\#\#\# For Each Condition:  
\- \[ \] Description text displays above Yes/No options  
\- \[ \] "Describe in own words" text area shows only if Yes  
\- \[ \] "Already rated?" question shows only if Yes  
\- \[ \] Logic jump to next condition works if No  
\- \[ \] Logic jump to condition builder works if Yes

\*\*Test:\*\* Select "No" for all conditions (should skip all builders)    
\*\*Test:\*\* Select "Yes" for 1 condition (should show only that builder)    
\*\*Test:\*\* Select "Yes" for 3 conditions (should show 3 builders in sequence)

\---

\#\# ✅ MODULE 3: CONDITION BUILDER TEMPLATE

\#\#\# Build ONE Perfect Template First:  
\- \[ \] All 100 questions created for first condition  
\- \[ \] Q1: Service connection type (multi-select) works  
\- \[ \] Q2-3: Primary connection (conditional display based on Q1)  
\- \[ \] Q4-6: Secondary connection (conditional display based on Q1)  
\- \[ \] Q7-9: Aggravation (conditional display based on Q1)  
\- \[ \] Q10-15: Symptom onset and diagnosis  
\- \[ \] Q16: Treatment Yes/No logic jump works  
\- \[ \] Q17-18: No treatment path (shows if Q16=No)  
\- \[ \] Q19-43: Provider section (shows if Q16=Yes, max 5 providers)  
\- \[ \] Provider "add another" logic works (Q23, Q28, Q33, Q38)  
\- \[ \] Q44: Medications Yes/No logic jump works  
\- \[ \] Q45-73: Medication section (shows if Q44=Yes, max 10 medications)  
\- \[ \] Medication "add another" logic works (Q47, Q50, Q53, Q56, Q59, Q62, Q65, Q68, Q71)  
\- \[ \] Q75-78: Current symptoms questions  
\- \[ \] Q79-83: Life impact questions (work, daily, relationships, sleep, social)  
\- \[ \] Q84-87: Flare-ups section (conditional based on Q84)  
\- \[ \] Q88: Buddy statements Yes/No logic jump works  
\- \[ \] Q89-99: Buddy statement section (shows if Q88=Yes, max 3 buddies)  
\- \[ \] Buddy "add another" logic works (Q93, Q98)  
\- \[ \] Q100: Additional information (optional)

\#\#\# Test First Condition Builder Thoroughly:  
\- \[ \] Test with "Directly caused" only  
\- \[ \] Test with "Secondary" only  
\- \[ \] Test with multiple service connection types  
\- \[ \] Test with treatment \= Yes, 1 provider, 1 medication  
\- \[ \] Test with treatment \= Yes, 5 providers, 10 medications  
\- \[ \] Test with treatment \= No  
\- \[ \] Test with buddy statements \= Yes, 1 buddy  
\- \[ \] Test with buddy statements \= Yes, 3 buddies  
\- \[ \] Test with buddy statements \= No

\#\#\# Replicate for All Conditions:  
\- \[ \] Template copied for each condition from Module 2  
\- \[ \] Condition name dynamically populates throughout builder  
\- \[ \] After builder completes, quiz moves to next condition (if any)  
\- \[ \] After all condition builders complete, quiz moves to Module 4

\---

\#\# ✅ MODULE 4: DOCUMENTS & SCHEDULING

\- \[ \] Q1: File upload configured (PDF, JPG, PNG, DOC, DOCX, 25MB max)  
\- \[ \] Multiple file uploads allowed  
\- \[ \] Q2: Consultation time selection created  
\- \[ \] Q3: Additional notes text area (optional)  
\- \[ \] All questions in this module are properly numbered  
\- \[ \] Flow from last condition builder to this module works

\---

\#\# ✅ RESULT PAGE

\- \[ \] Headline and subheadline display correctly  
\- \[ \] Dynamic variables populate: {{NAME}}, {{NUMBER\_OF\_CONDITIONS}}, {{CONSULTATION\_TIME}}  
\- \[ \] Body text formatted with proper line breaks and sections  
\- \[ \] Primary CTA button links to client portal  
\- \[ \] Secondary CTA button generates/downloads PDF summary  
\- \[ \] Thank you message is warm and professional

\---

\# TIPS FOR BUILDING THIS QUIZ

\#\# Time-Saving Strategies:

\#\#\# 1\. Build Module 1 First (Veteran Profile)  
This is straightforward with no complex logic except the job titles section.  
\- Build Q1-8 first  
\- Then build the job title pattern (Q9-12) perfectly  
\- Copy/paste Q9-12 nine times for job titles 2-10  
\- Update text (Second, Third, Fourth, etc.)  
\- Update question numbers  
\- Update logic jumps  
\- Test the logic jumps thoroughly

\#\#\# 2\. Build ONE Condition Screening Pattern Perfectly  
Build the pattern for one condition (e.g., Tinnitus Q50-52):  
\- Yes/No question with description  
\- Text area for description (conditional)  
\- Already rated question (conditional)  
\- Logic jumps

Then copy/paste this pattern 44 times for the other conditions.  
\- Update condition names  
\- Update descriptions  
\- Update question numbers  
\- Update logic jumps to point to correct next condition

\#\#\# 3\. Build ONE Condition Builder Perfectly  
This is the most time-consuming part. Build all 100 questions for the first condition builder and test every single logic jump and conditional display.

Once perfect:  
\- This becomes your template  
\- You'll reference it for every other condition  
\- The pattern is identical; only the condition name changes

\#\#\# 4\. Use Find & Replace  
If Outgrow allows exporting/importing or if you're building in a text editor first:  
\- Use find & replace for bulk updates  
\- Example: Replace "Tinnitus" with "PTSD" for second builder  
\- Replace question numbers in bulk

\#\#\# 5\. Test Incrementally  
Don't build everything and then test. Test as you go:  
\- Build veteran profile → Test  
\- Build 5 condition screenings → Test  
\- Build 1 complete condition builder → Test thoroughly  
\- Build 5 more condition screenings → Test  
\- Build Documents & Scheduling → Test  
\- Test complete end-to-end flow

## \# QUICK REFERENCE: QUESTION NUMBER RANGES

For easy reference when building:

\- \*\*Q1-48:\*\* Veteran Profile  
\- \*\*Q49:\*\* Condition screening instructions  
\- \*\*Q50-52:\*\* Tinnitus screening  
\- \*\*Q53-52 \+ 100:\*\* Tinnitus builder (if yes)  
\- \*\*Q54-56:\*\* PTSD screening  
\- \*\*Q57-56 \+ 100:\*\* PTSD builder (if yes)  
\- \*(Pattern continues for all 45 conditions)\*  
\- \*\*Q226-228:\*\* Scars screening (last main condition)  
\- \*\*Q230:\*\* Other conditions start  
\- \*\*Q231-254:\*\* Up to 5 other conditions  
\- \*\*Q255+ (variable):\*\* Documents & Scheduling (3 questions)  
\- \*\*Result Page:\*\* Completion

\*\*Note:\*\* Actual question numbers will cascade based on how many conditions are claimed and how many builders are completed.

