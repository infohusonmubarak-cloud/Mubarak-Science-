// Hand-written mirror of supabase-schema-msmk.sql — gives supabase-js real
// row types instead of `never` (its default when no Database generic is
// passed to createClient). Keep this in sync by hand whenever the SQL
// schema changes; there's no CLI codegen step in this project.

export interface Database {
  public: {
    Tables: {
      admins: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          added_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          full_name?: string | null;
          added_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          added_at?: string;
        };
        Relationships: [];
      };
      msmk_registrations: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          phone: string;
          location: string;
          bkash_transaction_id: string;
          status: 'pending' | 'verified' | 'rejected';
          staff_notes: string | null;
          submitted_at: string;
          reviewed_at: string | null;
        };
        Insert: {
          id?: string;
          full_name: string;
          email: string;
          phone: string;
          location: string;
          bkash_transaction_id: string;
          status?: 'pending' | 'verified' | 'rejected';
          staff_notes?: string | null;
          submitted_at?: string;
          reviewed_at?: string | null;
        };
        Update: {
          id?: string;
          full_name?: string;
          email?: string;
          phone?: string;
          location?: string;
          bkash_transaction_id?: string;
          status?: 'pending' | 'verified' | 'rejected';
          staff_notes?: string | null;
          submitted_at?: string;
          reviewed_at?: string | null;
        };
        Relationships: [];
      };
      msmk_access_codes: {
        Row: {
          code: string;
          email: string;
          full_name: string;
          registration_id: string | null;
          active: boolean;
          issued_at: string;
        };
        Insert: {
          code: string;
          email: string;
          full_name: string;
          registration_id?: string | null;
          active?: boolean;
          issued_at?: string;
        };
        Update: {
          code?: string;
          email?: string;
          full_name?: string;
          registration_id?: string | null;
          active?: boolean;
          issued_at?: string;
        };
        Relationships: [];
      };
      msmk_progress: {
        Row: {
          access_code: string;
          module_id: string;
          completed_sections: string[];
          updated_at: string;
        };
        Insert: {
          access_code: string;
          module_id: string;
          completed_sections?: string[];
          updated_at?: string;
        };
        Update: {
          access_code?: string;
          module_id?: string;
          completed_sections?: string[];
          updated_at?: string;
        };
        Relationships: [];
      };
      msmk_assessment_attempts: {
        Row: {
          access_code: string;
          module_id: string;
          score: number;
          total: number;
          percent: number;
          attempt_count: number;
          last_attempt_at: string;
        };
        Insert: {
          access_code: string;
          module_id: string;
          score: number;
          total: number;
          percent: number;
          attempt_count?: number;
          last_attempt_at?: string;
        };
        Update: {
          access_code?: string;
          module_id?: string;
          score?: number;
          total?: number;
          percent?: number;
          attempt_count?: number;
          last_attempt_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      msmk_learner_summary: {
        Row: {
          access_code: string;
          full_name: string;
          email: string;
          modules_attempted: number;
          average_percent: number;
          certificate_unlocked: boolean;
        };
        Relationships: [];
      };
    };
    Functions: {
      is_current_user_admin: {
        Args: Record<string, never>;
        Returns: boolean;
      };
    };
  };
}
