export enum MetricName {
  // Activity and Exercise
  ACTIVE_ENERGY = 'active_energy',
  RESTING_ENERGY = 'basal_energy_burned',
  APPLE_EXERCISE_TIME = 'apple_exercise_time',
  APPLE_MOVE_TIME = 'apple_move_time',
  APPLE_STAND_TIME = 'apple_stand_time',
  APPLE_STAND_HOUR = 'apple_stand_hour',
  CYCLING_DISTANCE = 'cycling_distance',
  DOWNHILL_SNOW_SPORTS = 'downhill_snow_sports',
  SWIMMING_DISTANCE = 'swimming_distance',
  WALKING_RUNNING_DISTANCE = 'walking_running_distance',
  WHEELCHAIR_DISTANCE = 'wheelchair_distance',
  FLIGHTS_CLIMBED = 'flights_climbed',
  WHEELCHAIR_PUSH_COUNT = 'wheelchair_push_count',
  SWIM_STROKE_COUNT = 'swim_stroke_count',
  VO2_MAX = 'vo2max',
  PHYSICAL_EFFORT = 'physical_effort',
  STEP_COUNT = 'step_count',
  CYCLING_CADENCE = 'cycling_cadence',
  CYCLING_FUNCTIONAL_THRESHOLD_POWER = 'cycling_functional_threshold_power',
  CYCLING_POWER = 'cycling_power',
  CYCLING_SPEED = 'cycling_speed',
  RUNNING_POWER = 'running_power',
  RUNNING_SPEED = 'running_speed',
  RUNNING_GROUND_CONTACT_TIME = 'running_ground_contact_time',
  RUNNING_STRIDE_LENGTH = 'running_stride_length',

  // Body Measurements
  HEIGHT = 'height',
  WEIGHT_BODY_MASS = 'weight_body_mass',
  WAIST_CIRCUMFERENCE = 'waist_circumference',
  BODY_FAT_PERCENTAGE = 'body_fat_percentage',
  BODY_MASS_INDEX = 'body_mass_index',
  LEAN_BODY_MASS = 'lean_body_mass',

  // Heart and Vitals
  HEART_RATE = 'heart_rate',
  RESTING_HEART_RATE = 'resting_heart_rate',
  HEART_RATE_VARIABILITY = 'heart_rate_variability',
  HEART_RATE_RECOVERY_ONE_MINUTE = 'cardio_recovery',
  WALKING_HEART_RATE = 'walking_heart_rate',
  ATRIAL_FIBRILLATION_BURDEN = 'atrial_fibrillation_burden',
  BLOOD_PRESSURE = 'blood_pressure',

  // Mobility Metrics
  WALKING_SPEED = 'walking_speed',
  WALKING_STEP_LENGTH = 'walking_step_length',
  WALKING_ASYMMETRY_PERCENTAGE = 'walking_asymmetry_percentage',
  WALKING_DOUBLE_SUPPORT_PERCENTAGE = 'walking_double_support_percentage',
  SIX_MINUTE_WALKING_TEST_DISTANCE = 'six_minute_walking_test_distance',
  STAIR_SPEED_UP = 'stair_speed_up',
  STAIR_SPEED_DOWN = 'stair_speed_down',
  RUNNING_VERTICAL_OSCILLATION = 'running_vertical_oscillation',

  // Respiratory
  RESPIRATORY_RATE = 'respiratory_rate',
  FORCED_EXPIRATORY_VOLUME = 'forced_expiratory_volume',
  FORCED_VITAL_CAPACITY = 'forced_vital_capacity',
  BLOOD_OXYGEN_SATURATION = 'blood_oxygen_saturation',
  PERIPHERAL_PERFUSION_INDEX = 'peripheral_perfusion_index',
  PEAK_EXPIRATORY_FLOW_RATE = 'peak_expiratory_flow_rate',
  INHALER_USAGE = 'inhaler_usage',

  // Temperature and Environmental
  BODY_TEMPERATURE = 'body_temperature',
  BASAL_BODY_TEMPERATURE = 'basal_body_temperature',
  UNDER_WATER_DEPTH = 'under_water_depth',
  UNDER_WATER_TEMPERATURE = 'under_water_temperature',
  UV_EXPOSURE = 'uv_exposure',
  TIME_IN_DAYLIGHT = 'time_in_daylight',
  ENVIRONMENTAL_AUDIO = 'environmental_audio',
  HEADPHONE_AUDIO = 'headphone_audio',

  // Mindfulness and Wellness
  MINDFUL_MINUTES = 'mindful_minutes',
  SEXUAL_ACTIVITY = 'sexual_activity',
  ELECTRODERMAL_ACTIVITY = 'electrodermal_activity',

  // Sleep
  SLEEP_ANALYSIS = 'sleep_analysis',
  APPLE_SLEEPING_WRIST_TEMPERATURE = 'apple_sleeping_wrist_temperature',
  BREATHING_DISTURBANCES = 'breathing_disturbances',

  // Medical
  INSULIN_DELIVERY = 'insulin_delivery',
  BLOOD_GLUCOSE = 'blood_glucose',

  // Nutrition
  DIETARY_ENERGY = 'dietary_energy',
  DIETARY_WATER = 'dietary_water',
  DIETARY_SUGAR = 'dietary_sugar',
  DIETARY_CHOLESTEROL = 'cholesterol',
  DIETARY_CARBOHYDRATES = 'carbohydrates',
  DIETARY_BIOTIN = 'biotin',
  DIETARY_CAFFEINE = 'caffeine',
  DIETARY_CALCIUM = 'calcium',
  DIETARY_CHLORIDE = 'chloride',
  DIETARY_CHROMIUM = 'chromium',
  DIETARY_COPPER = 'copper',
  DIETARY_FIBER = 'fiber',
  DIETARY_FOLATE = 'folate',
  DIETARY_IODINE = 'iodine',
  DIETARY_IRON = 'iron',
  DIETARY_MAGNESIUM = 'magnesium',
  DIETARY_MANGANESE = 'manganese',
  DIETARY_MOLYBDENUM = 'molybdenum',
  DIETARY_MONOSATURATED_FAT = 'monosaturated_fat',
  DIETARY_NIACIN = 'niacin',
  DIETARY_PANTOTHENIC_ACID = 'pantothenic_acid',
  DIETARY_POLYUNSATURATED_FAT = 'polyunsaturated_fat',
  DIETARY_POTASSIUM = 'potassium',
  DIETARY_PROTEIN = 'protein',
  DIETARY_RIBOFLAVIN = 'riboflavin',
  DIETARY_SATURATED_FAT = 'saturated_fat',
  DIETARY_SELENIUM = 'selenium',
  DIETARY_SODIUM = 'sodium',
  DIETARY_THIAMIN = 'thiamin',
  DIETARY_TOTAL_FAT = 'total_fat',
  DIETARY_VITAMIN_A = 'vitamin_a',
  DIETARY_VITAMIN_B6 = 'vitamin_b6',
  DIETARY_VITAMIN_B12 = 'vitamin_b12',
  DIETARY_VITAMIN_C = 'vitamin_c',
  DIETARY_VITAMIN_D = 'vitamin_d',
  DIETARY_VITAMIN_E = 'vitamin_e',
  DIETARY_VITAMIN_K = 'vitamin_k',
  DIETARY_ZINC = 'zinc',

  // Other Health Metrics
  BLOOD_ALCOHOL_CONTENT = 'blood_alcohol_content',
  HANDWASHING = 'handwashing',
  NUMBER_OF_TIME_FALLEN = 'number_of_time_fallen',
  NUMBER_OF_ALCOHOLIC_BEVERAGES = 'number_of_alcoholic_beverages',
  TOOTHBRUSHING = 'toothbrushing',

  // TrainingPeaks
  HEART_RATE_AVERAGE = 'HeartRateAverage',
  HEART_RATE_MAX = 'HeartRateMax',
  TSS_SCORE = 'TSS',
  hrTSS_SCORE = 'hrTSS',
  RPE_SCORE = 'Rpe',
  FEELING = 'Feeling',
  INTENSITY_FACTOR = 'IntensityFactor',
  DIST_IN_METERS = 'DistanceInMeters',
  TIME_TOTAL_IN_HOURS  = 'TimeTotalInHours',
  // Add these if zone minutes will be used
  HRZone1Minutes = 'HRZone1Minutes',
  HRZone2Minutes = 'HRZone2Minutes',
  HRZone3Minutes = 'HRZone3Minutes',
  HRZone4Minutes = 'HRZone4Minutes',
  HRZone5Minutes = 'HRZone5Minutes',
  HRZone6Minutes = 'HRZone6Minutes',
  HRZone7Minutes = 'HRZone7Minutes',
}
