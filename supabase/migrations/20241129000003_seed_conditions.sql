-- VA Intake Engine - Seed Conditions Data
-- Migration: 003_seed_conditions
-- Created: 2024-11-29
-- Populates the conditions table with common VA disability conditions

INSERT INTO conditions (name, description, category, display_order) VALUES

-- AUDITORY CONDITIONS
('Tinnitus',
'Commonly mistaken with Tendonitis - but this is the ringing in the ears that''s so annoying. Do you ever have that high-pitched ringing when it''s really quiet, or late at night when you''re trying to sleep? If it''s really bad, it''ll be all the time.',
'auditory', 1),

('Hearing Loss',
'Difficulty hearing conversations, especially in noisy environments. May need to ask people to repeat themselves, turn up the TV volume, or have trouble understanding speech. Can affect one or both ears.',
'auditory', 2),

-- MENTAL HEALTH CONDITIONS
('PTSD',
'This is when you experienced or witnessed traumatic events during service and now have symptoms like nightmares, flashbacks, anxiety, hypervigilance (always being on alert), anger issues, or avoiding situations that remind you of the trauma. Many veterans describe it as "can''t shut my brain off" or "always waiting for something bad to happen."',
'mental_health', 3),

('Depression',
'This goes beyond just feeling sad. It''s persistent low mood, loss of interest in things you used to enjoy, sleeping too much or too little, feeling worthless or hopeless, low energy, trouble concentrating. Many veterans say things like "I just don''t care anymore" or "can''t get motivated to do anything."',
'mental_health', 4),

('Anxiety',
'Excessive worry, panic attacks, feeling on edge or restless, racing heart, sweating, trouble breathing, avoiding social situations or crowds. Veterans often describe it as "always feeling like something bad is about to happen" or "can''t relax even when there''s no threat."',
'mental_health', 5),

-- RESPIRATORY/SLEEP CONDITIONS
('Sleep Apnea',
'You stop breathing repeatedly during sleep, often causing you to wake up gasping or choking. Your spouse or partner might say you snore really loud and then suddenly stop breathing for a bit. You wake up tired even after a full night''s sleep, fall asleep during the day, have morning headaches. Many veterans use a CPAP machine for this.',
'respiratory', 6),

-- NEUROLOGICAL CONDITIONS
('Migraine Headaches',
'Not just regular headaches - these are severe, throbbing headaches often on one side of your head. Usually come with sensitivity to light and sound, nausea, sometimes vision problems. They can last hours or days and force you to lie down in a dark room. Different from tension headaches or sinus headaches.',
'neurological', 7),

('Tension Headaches',
'Frequent headaches that feel like pressure or tightness around your head, often described as a "band" around the forehead. Can be caused by stress, neck problems, or eye strain. Different from migraines.',
'neurological', 8),

-- MUSCULOSKELETAL - SPINE
('Back Pain',
'Chronic lower back pain - the kind that''s always there or flares up regularly. Makes it hard to bend over, lift things, stand for long periods, or sit for too long. Might have started from carrying heavy gear, jumping from vehicles, rucking, or just years of military wear and tear on your spine.',
'musculoskeletal', 9),

('Neck Pain',
'Chronic neck pain and stiffness. Trouble turning your head fully, pain that radiates into your shoulders or upper back, headaches that start in your neck. Often from wearing heavy helmets, looking down at equipment, vehicle accidents, or parachute landings.',
'musculoskeletal', 10),

-- MUSCULOSKELETAL - JOINTS
('Knee Pain',
'Chronic pain in one or both knees. Might have swelling, grinding/popping sounds, instability (knee gives out), trouble with stairs, kneeling, or squatting. Common from running on concrete, jumping from vehicles, rucking with heavy loads, or old injuries that never fully healed.',
'musculoskeletal', 11),

('Shoulder Pain',
'Chronic pain in one or both shoulders. Trouble reaching overhead, reaching behind your back, lifting things, or pain when sleeping on that side. Might have a history of dislocations, rotator cuff problems, or just years of repetitive strain from military activities.',
'musculoskeletal', 12),

('Hip Pain',
'Chronic pain in one or both hips. Pain in the groin, outer hip, or buttock area. Trouble walking long distances, getting in/out of vehicles, putting on shoes/socks. Stiffness especially in the morning. Often from repetitive impact, carrying heavy loads, or old injuries.',
'musculoskeletal', 13),

('Ankle Pain',
'Chronic ankle pain or instability. Ankles that "roll" easily, pain with walking or standing, swelling, trouble on uneven ground. Often from old sprains, jumps, or repetitive stress that never properly healed.',
'musculoskeletal', 14),

('Foot Pain',
'Chronic pain in feet, including plantar fasciitis (heel pain), flat feet, or other foot conditions. Pain with walking, standing, or first thing in the morning. Common from marching, standing for long periods, or improper footwear.',
'musculoskeletal', 15),

('Elbow Pain',
'Chronic elbow pain, including tennis elbow or golfer''s elbow. Pain with gripping, lifting, or twisting motions. Often from repetitive use during military service.',
'musculoskeletal', 16),

('Wrist Pain',
'Chronic wrist pain, possibly including carpal tunnel syndrome. Pain, numbness, or tingling in the wrist and hand. Weakness with gripping. Often from repetitive motions or old injuries.',
'musculoskeletal', 17),

('Hand/Finger Pain',
'Chronic pain in hands or fingers, including arthritis. Trouble with fine motor tasks, gripping, or manual dexterity. Stiffness or swelling in joints.',
'musculoskeletal', 18),

-- SKIN CONDITIONS
('Scars',
'Service-connected scars from injuries, burns, or surgeries. Can be painful, limit range of motion, or be cosmetically disfiguring.',
'dermatological', 19),

('Skin Conditions',
'Chronic skin conditions like eczema, psoriasis, or rashes related to military service or exposures.',
'dermatological', 20),

-- GASTROINTESTINAL
('IBS',
'Irritable Bowel Syndrome - chronic digestive issues including abdominal pain, bloating, diarrhea, constipation, or alternating between both. Often triggered by stress or certain foods.',
'gastrointestinal', 21),

('GERD',
'Gastroesophageal Reflux Disease - chronic acid reflux, heartburn, difficulty swallowing, or chest pain. Often worse when lying down.',
'gastrointestinal', 22),

-- DENTAL/TMJ
('TMJ',
'Temporomandibular Joint Disorder - jaw pain, clicking or popping when opening mouth, difficulty chewing, headaches. Can be from teeth grinding, stress, or old injuries.',
'dental', 23),

-- RESPIRATORY
('Asthma',
'Difficulty breathing, wheezing, chest tightness, or shortness of breath. May be triggered by exercise, allergies, or environmental exposures during service.',
'respiratory', 24),

('Chronic Bronchitis',
'Persistent cough with mucus production, shortness of breath, chest discomfort. Often from burn pit exposure or other environmental hazards.',
'respiratory', 25),

-- CARDIOVASCULAR
('Hypertension',
'High blood pressure requiring medication or monitoring. Can be service-connected if related to service or secondary to other conditions like sleep apnea or PTSD.',
'cardiovascular', 26),

-- GENITOURINARY
('Erectile Dysfunction',
'Difficulty achieving or maintaining erections. Can be service-connected if related to PTSD, medications, or service-related injuries or conditions.',
'genitourinary', 27),

-- RADICULOPATHY/NERVE
('Sciatica',
'Pain that radiates from lower back down through the buttock and leg, often described as shooting or burning. Caused by compression or irritation of the sciatic nerve.',
'neurological', 28),

('Peripheral Neuropathy',
'Numbness, tingling, or burning sensations in hands or feet. Weakness in affected areas. Can be from diabetes, Agent Orange exposure, or other service-related causes.',
'neurological', 29),

-- OTHER COMMON CONDITIONS
('Allergic Rhinitis',
'Chronic nasal congestion, sneezing, runny nose, or sinus pressure. Often environmental allergies that started or worsened during service.',
'respiratory', 30);

-- Add indices for common queries
CREATE INDEX IF NOT EXISTS idx_conditions_category_order ON conditions(category, display_order);
CREATE INDEX IF NOT EXISTS idx_conditions_name ON conditions(name);

COMMENT ON TABLE conditions IS 'Contains 30 common VA disability conditions for MVP - more can be added in Phase 2';
