CREATE DATABASE medicaredb;

INSERT INTO users (first_name, last_name, email, password) 
VALUES 
('John', 'Doe', 'johndoe@example.com', 'password1'),
('Jane', 'Doe', 'janedoe@example.com', 'password2'),
('Bob', 'Smith', 'bobsmith@example.com', 'password3'),
('Alice', 'Johnson', 'alicejohnson@example.com', 'password4'),
('Shahjahan', 'Arfin', 'arfin@gmail.com', 'arfin123@'),
('Admin', 'User', 'admin@gmail.com', 'admin');


INSERT INTO medicines (medicine_name, medicine_price, medicine_stock, image_link)
VALUES
('Paracetamol', 5, 100, 'http://drive.google.com/uc?id=1vqzCBywT7_7FHBzUvtGehpxmxsg6283M'),
('Ibuprofen', 8, 80, 'http://drive.google.com/uc?id=167mqQTb37DeG8g3nnJrytBCnC5E9hUJv'),
('Aspirin', 3, 120, 'http://drive.google.com/uc?id=1hsak4HfNOJ-VNkMSHoqji0vTqyqdhQDM'),
('Amoxicillin', 10, 50, 'http://drive.google.com/uc?id=11VYRpsYL-zqEz-dprJ8Pzc1bLt8uDaCB'),
('Azithromycin', 15, 40, 'http://drive.google.com/uc?id=1zqC-yej6zu5Zf8EZOF6-69tvI_4w4tt-'),
('Metformin', 6, 90, 'http://drive.google.com/uc?id=1AQ7yIdMPW1bvQBHDZNVQFZzo0n15m7LX'),
('Lisinopril', 7, 85, 'http://drive.google.com/uc?id=1wyDX8TcxD_fNcEjY0BaJddAyAJBOE9qE'),
('Atorvastatin', 9, 70, 'http://drive.google.com/uc?id=14KWhE3yfQtPioux7yFdYAuI3TzRgw1v3'),
('Omeprazole', 4, 110, 'http://drive.google.com/uc?id=1FvxW7OFLfOGUuxr_Uz4NEqF0RKbjV2Af'),
('Simvastatin', 8, 75, 'http://drive.google.com/uc?id=1Fuc9oQ4oaYzmB-jnkZtXbDy-j45W9moO'),
('Losartan', 7, 80, 'http://drive.google.com/uc?id=1GWbtPsqSoNjMKVPmFwbhLws9u4cPXp4F'),
('Furosemide', 5, 95, 'http://drive.google.com/uc?id=1GQUK57G2y1Vnxu1i-SgXRJhNsaGe_m56'),
('Metoprolol', 6, 85, 'http://drive.google.com/uc?id=1GNdTd6S3eRnC6U5yELC6c2NaOE8VxH6l'),
('Prednisone', 11, 45, 'http://drive.google.com/uc?id=1GNUqNO7kffg--V7kSfeYMOQF3CEMskWZ'),
('Levothyroxine', 13, 30, 'http://drive.google.com/uc?id=1GMwate1fqgMokOjOUqzQSQY-OXGEIpTu'),
('Sertraline', 12, 35, 'http://drive.google.com/uc?id=1GKE0uBdi_RgwAy340MYxPlb_20A48_So'),
('Ciprofloxacin', 18, 25, 'http://drive.google.com/uc?id=1GA8KctDGS4wKPIJmn96OrC3ukyVNBH-5'),
('Tramadol', 7, 70, 'http://drive.google.com/uc?id=1G8XfgRuhj5MnOAkXjnurkmPf3Bp3GBgz'),
('Clindamycin', 15, 30, 'http://drive.google.com/uc?id=1G6axwkQWv2T-7BF8I5fVmT6cL8BHA3jV'),
('Fluoxetine', 9, 60, 'http://drive.google.com/uc?id=1G1ksFj5PgvGfr9N7BZaLJfqjl4P0iSKr'),
('Citalopram', 8, 70, 'http://drive.google.com/uc?id=1G02SK6sShoO_V9KpxtAyEObsI2cAIegN'),
('Gabapentin', 11, 50, 'http://drive.google.com/uc?id=1FzH2M-fLE6hrF0SEkZNmyqwa7lGZ7o5D'),
('Amlodipine', 10, 55, 'http://drive.google.com/uc?id=1GQUK57G2y1Vnxu1i-SgXRJhNsaGe_m56'),
('Methotrexate', 17, 20, 'http://drive.google.com/uc?id=1GKE0uBdi_RgwAy340MYxPlb_20A48_So'),
('Albuterol', 6, 95, 'http://drive.google.com/uc?id=1wyDX8TcxD_fNcEjY0BaJddAyAJBOE9qE'),
('Hydrocodone', 14, 30, 'http://drive.google.com/uc?id=1zqC-yej6zu5Zf8EZOF6-69tvI_4w4tt-'),
('Amphetamine', 20, 10, 'http://drive.google.com/uc?id=1GWbtPsqSoNjMKVPmFwbhLws9u4cPXp4F'),
('Methylphenidate', 18, 15, 'http://drive.google.com/uc?id=167mqQTb37DeG8g3nnJrytBCnC5E9hUJv'),
('Codeine', 12, 40, 'http://drive.google.com/uc?id=1GWbtPsqSoNjMKVPmFwbhLws9u4cPXp4F');


INSERT INTO doctor_appointment (doctor_name, price, category, image_link) VALUES
('Dr. John Smith', 150.00, 'Cardiology', 'http://drive.google.com/uc?id=1GYeUL6RCTOEdsGtGXkCgEvGhBa5bw6uI'),
('Dr. Sarah Johnson', 120.00, 'Dermatology', 'http://drive.google.com/uc?id=1GYizE-YX-RaCwOTKC2nGC_DlOsq0efpm'),
('Dr. Robert Lee', 200.00, 'Neurology', 'http://drive.google.com/uc?id=1Gad2S_gU1QV3vh9EjEu9b0HErvnZ9R56'),
('Dr. Elizabeth Brown', 175.00, 'Oncology', 'http://drive.google.com/uc?id=1Ge230pq2LMQIz9XgJF2443P8Z0Vvi-o4'),
('Dr. Michael Chen', 100.00, 'Pediatrics', 'http://drive.google.com/uc?id=1Gimw2514PrbdJeqS7iCFKE6bdEw_tWt6'),
('Dr. Emily Davis', 225.00, 'Psychiatry', 'http://drive.google.com/uc?id=1GjTjwB75r3FwyQq63e-h6lBAa6OpKtyQ'),
('Dr. William Garcia', 150.00, 'Cardiology', 'http://drive.google.com/uc?id=1GYeUL6RCTOEdsGtGXkCgEvGhBa5bw6uI'),
('Dr. Jennifer Lee', 180.00, 'Dermatology', 'http://drive.google.com/uc?id=1GYizE-YX-RaCwOTKC2nGC_DlOsq0efpm'),
('Dr. David Martinez', 175.00, 'Neurology', 'http://drive.google.com/uc?id=1Gad2S_gU1QV3vh9EjEu9b0HErvnZ9R56'),
('Dr. Sophia Nguyen', 200.00, 'Oncology', 'http://drive.google.com/uc?id=1Ge230pq2LMQIz9XgJF2443P8Z0Vvi-o4'),
('Dr. Daniel Patel', 120.00, 'Pediatrics', 'http://drive.google.com/uc?id=1Gimw2514PrbdJeqS7iCFKE6bdEw_tWt6'),
('Dr. Madison Rodriguez', 225.00, 'Psychiatry', 'http://drive.google.com/uc?id=1GjTjwB75r3FwyQq63e-h6lBAa6OpKtyQ'),
('Dr. Christopher Smith', 175.00, 'Cardiology', 'http://drive.google.com/uc?id=1GYeUL6RCTOEdsGtGXkCgEvGhBa5bw6uI'),
('Dr. Ashley Taylor', 150.00, 'Dermatology', 'http://drive.google.com/uc?id=1GYizE-YX-RaCwOTKC2nGC_DlOsq0efpm'),
('Dr. James Wilson', 200.00, 'Neurology', 'http://drive.google.com/uc?id=1Gad2S_gU1QV3vh9EjEu9b0HErvnZ9R56'),
('Dr. Samantha Baker', 175.00, 'Oncology', 'http://drive.google.com/uc?id=1Ge230pq2LMQIz9XgJF2443P8Z0Vvi-o4'),
('Dr. Brandon Campbell', 100.00, 'Pediatrics', 'http://drive.google.com/uc?id=1Gimw2514PrbdJeqS7iCFKE6bdEw_tWt6'),
('Dr. Olivia Green', 225.00, 'Psychiatry', 'http://drive.google.com/uc?id=1GjTjwB75r3FwyQq63e-h6lBAa6OpKtyQ'),
('Dr. Benjamin Harris', 150.00, 'Cardiology', 'http://drive.google.com/uc?id=1GYeUL6RCTOEdsGtGXkCgEvGhBa5bw6uI'),
('Dr. Victoria Martinez', 180.00, 'Dermatology', 'http://drive.google.com/uc?id=1GYizE-YX-RaCwOTKC2nGC_DlOsq0efpm');


INSERT INTO Blog (title, description, category, image_link) VALUES
('Nutrition', 'Eating nutritious food is crucial for maintaining good health.', 'Health', 'http://drive.google.com/uc?id=1H-mBcMDIYI2zGfvt4FScAFz7jlm0qrwa'),
('Recipes', 'Try out these simple and healthy recipes for a guilt-free meal.', 'Food', 'http://drive.google.com/uc?id=1Gq1u6joDUM0L0cH7qOrXl6Z1nWQ3S9ae'),
('Veganism', 'Switch to a vegan diet for a healthier and eco-friendly lifestyle.', 'Lifestyle', 'http://drive.google.com/uc?id=1H85yc-p8CokZZITDvAlpRgmI0sisSkgW'),
('Organic', 'Organic food is the key to a healthy and sustainable future.', 'Environment', 'http://drive.google.com/uc?id=1H1uQC3vBWu79pgr4b1UTBiP6Q0zsihy_'),
('Smoothies', 'Start your day with these delicious and healthy smoothie recipes.', 'Food', 'http://drive.google.com/uc?id=1H5qnJvB-7M_4dXLF0sy7Ibo_Iw5Lb2RN'),
('Superfoods', 'Incorporating superfoods into your diet can boost your immunity and overall health.', 'Health', 'http://drive.google.com/uc?id=1H7pwjUKXHt3On3ABdu7RvqzP78obi1zC'),
('Keto', 'The keto diet can help you lose weight and improve your health.', 'Diet', 'http://drive.google.com/uc?id=1GwClDfMTHKW0bShunpNsBssLf1bxYttY'),
('Detox', 'Detox your body with these simple and healthy detox recipes.', 'Health', 'http://drive.google.com/uc?id=1Gq1u6joDUM0L0cH7qOrXl6Z1nWQ3S9ae'),
('Paleo', 'The paleo diet is based on the foods that our ancestors ate and can improve your health.', 'Diet', 'http://drive.google.com/uc?id=1H2BsD3VcSDb0KyxAF9oa3miWLqKoTAkV'),
('Gluten-free', 'Going gluten-free can improve your digestion and overall health.', 'Diet', 'http://drive.google.com/uc?id=1GtCY1jQV4JCJRIVjSzAQ79yehykq9wKi'),
('Mediterranean', 'The Mediterranean diet is a healthy and delicious way of eating.', 'Diet', 'http://drive.google.com/uc?id=1GwClDfMTHKW0bShunpNsBssLf1bxYttY'),
('Plant-based', 'A plant-based diet can lower your risk of chronic diseases and improve your health.', 'Diet', 'http://drive.google.com/uc?id=1H5qnJvB-7M_4dXLF0sy7Ibo_Iw5Lb2RN'),
('Juicing', 'Juicing is an easy and delicious way to incorporate more fruits and vegetables into your diet.', 'Food', 'http://drive.google.com/uc?id=1H5qnJvB-7M_4dXLF0sy7Ibo_Iw5Lb2RN'),
('Raw', 'A raw food diet can improve your digestion and provide you with essential nutrients.', 'Diet', 'http://drive.google.com/uc?id=1GujM5vTwosTz-mXORqIf2ATPuZyOwLqG'),
('Fasting', 'Intermittent fasting can help you lose weight and improve your health.', 'Diet', 'http://drive.google.com/uc?id=1GwClDfMTHKW0bShunpNsBssLf1bxYttY'),
('Gut health', 'Eating gut-friendly foods can improve your digestion and overall health.', 'Health', 'http://drive.google.com/uc?id=1GujM5vTwosTz-mXORqIf2ATPuZyOwLqG'),
('Anti-inflammatory', 'Eating anti-inflammatory foods can help you reduce inflammation and improve your health.', 'Health', 'https://example.com/image17.jpg'),
('Low-carb', 'The low-carb diet can help you lose weight and improve your health.', 'Diet', 'http://drive.google.com/uc?id=1GujM5vTwosTz-mXORqIf2ATPuZyOwLqG'),
('Super salads', 'Elevate your salad game with these delicious and nutritious super salads.', 'Food', 'http://drive.google.com/uc?id=1GwClDfMTHKW0bShunpNsBssLf1bxYttY'),
('Mindful eating', 'Practicing mindful eating can help you develop a healthy relationship with food.', 'Lifestyle', 'http://drive.google.com/uc?id=1H1uQC3vBWu79pgr4b1UTBiP6Q0zsihy_');


INSERT INTO health_concern (title, image_link) VALUES
('Lungs', 'http://drive.google.com/uc?id=1pGL1ncZC1eycmDTmGIXG1oEluOplkeW_'),
('Heart', 'http://drive.google.com/uc?id=16LE_DToBuoS8MVikwpJN6D0QAHvHGfue'),
('Liver', 'http://drive.google.com/uc?id=18MGd8artm8CLqdH8DaM3hQqX6xNNaehy'),
('Kidneys', 'http://drive.google.com/uc?id=1hLaZRgb56g--_qb2aOHjG08VEYAd26Vm'),
('Brain', 'http://drive.google.com/uc?id=1SFbZfesyWNHBWuuwHyGRHA0Dp5Xf3VgO'),
('Stomach', 'http://drive.google.com/uc?id=1qKuoQ9nNwgXXr-CrBlSUIVGKdUBZRmiJ');