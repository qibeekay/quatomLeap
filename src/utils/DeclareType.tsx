// FormDataType.ts
interface FormDataType {
  usertoken: string;
  full_name: string;
  dob: string;
  school_class: string;
  image: string;
  video: string[];
  position: string;
  contact_info: string;
  height: number | null;
  weight: number | null;
  body_type: string;
  speed: number | null;
  agility: number | null;
  strength: number | null;
  coordination: number | null;
  stamina: number | null;
  gpa: number | null;
  test_scores: string | null;
  academic_interests: string;
  academic_goals: string;
  gender: string[];
  level: string[];
  character_personality: string[];
  work_ethic: string[];
  game_sense: string[];
  sport_type: string;
  passing: number | null;
  // Basketball-specific fields
  threept?: number | null;
  perimeter?: number | null;
  ballhandling?: number | null;
  defense?: number | null;
  rebounding?: number | null;
  // Volleyball-specific fields
  setting?: number | null;
  spiking?: number | null;
  blocking?: number | null;
  serving?: number | null;
  // Football-specific fields
  shooting?: number | null;
  ballcontrol?: number | null;
  firsttouch?: number | null;
  dribbling?: number | null;
  [key: string]: any;
}

// Export the interface
export default FormDataType;
