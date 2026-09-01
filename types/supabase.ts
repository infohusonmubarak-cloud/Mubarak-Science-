// Hand-written mirror of supabase-schema-admin-access.sql,
// supabase-schema-msmk.sql, and supabase-schema-main-site.sql — gives
// supabase-js real row types instead of `never` (its default when no
// Database generic is passed to createClient). Keep this in sync by hand
// whenever a SQL schema file changes; there's no CLI codegen step in this
// project. One shared Database type for the whole project (MSMK + main
// site) since both sets of tables live in the same `public` schema of the
// same Supabase project.

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
      subjects: {
        Row: {
          slug: string;
          name: string;
          short_description: string;
          icon_key: string;
          accent_color: string;
          status: 'available' | 'coming-soon';
          order_index: number;
        };
        Insert: {
          slug: string;
          name: string;
          short_description: string;
          icon_key?: string;
          accent_color?: string;
          status?: 'available' | 'coming-soon';
          order_index?: number;
        };
        Update: {
          slug?: string;
          name?: string;
          short_description?: string;
          icon_key?: string;
          accent_color?: string;
          status?: 'available' | 'coming-soon';
          order_index?: number;
        };
        Relationships: [];
      };
      levels: {
        Row: {
          id: string;
          subject_slug: string;
          slug: string;
          name: string;
          description: string;
          status: 'available' | 'coming-soon';
          order_index: number;
        };
        Insert: {
          id?: string;
          subject_slug: string;
          slug: string;
          name: string;
          description?: string;
          status?: 'available' | 'coming-soon';
          order_index?: number;
        };
        Update: {
          id?: string;
          subject_slug?: string;
          slug?: string;
          name?: string;
          description?: string;
          status?: 'available' | 'coming-soon';
          order_index?: number;
        };
        Relationships: [];
      };
      chapters: {
        Row: {
          id: string;
          level_id: string;
          slug: string;
          number: number;
          title: string;
          blurb: string;
          status: 'available' | 'coming-soon';
          order_index: number;
        };
        Insert: {
          id?: string;
          level_id: string;
          slug: string;
          number: number;
          title: string;
          blurb?: string;
          status?: 'available' | 'coming-soon';
          order_index?: number;
        };
        Update: {
          id?: string;
          level_id?: string;
          slug?: string;
          number?: number;
          title?: string;
          blurb?: string;
          status?: 'available' | 'coming-soon';
          order_index?: number;
        };
        Relationships: [];
      };
      topics: {
        Row: {
          id: string;
          chapter_id: string;
          slug: string;
          title: string;
          order_index: number;
        };
        Insert: {
          id?: string;
          chapter_id: string;
          slug: string;
          title: string;
          order_index?: number;
        };
        Update: {
          id?: string;
          chapter_id?: string;
          slug?: string;
          title?: string;
          order_index?: number;
        };
        Relationships: [];
      };
      sections: {
        Row: {
          id: string;
          topic_id: string;
          slug: string;
          title: string;
          difficulty: 'easy' | 'medium' | 'hard' | null;
          content: Record<string, unknown>;
          status: 'available' | 'coming-soon';
          order_index: number;
        };
        Insert: {
          id?: string;
          topic_id: string;
          slug: string;
          title: string;
          difficulty?: 'easy' | 'medium' | 'hard' | null;
          content?: Record<string, unknown>;
          status?: 'available' | 'coming-soon';
          order_index?: number;
        };
        Update: {
          id?: string;
          topic_id?: string;
          slug?: string;
          title?: string;
          difficulty?: 'easy' | 'medium' | 'hard' | null;
          content?: Record<string, unknown>;
          status?: 'available' | 'coming-soon';
          order_index?: number;
        };
        Relationships: [];
      };
      learners: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          created_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      progress: {
        Row: {
          learner_id: string;
          section_id: string;
          completed_at: string;
        };
        Insert: {
          learner_id: string;
          section_id: string;
          completed_at?: string;
        };
        Update: {
          learner_id?: string;
          section_id?: string;
          completed_at?: string;
        };
        Relationships: [];
      };
      bookmarks: {
        Row: {
          learner_id: string;
          section_id: string;
          created_at: string;
        };
        Insert: {
          learner_id: string;
          section_id: string;
          created_at?: string;
        };
        Update: {
          learner_id?: string;
          section_id?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      assessment_attempts: {
        Row: {
          id: string;
          learner_id: string;
          chapter_id: string;
          score: number;
          total: number;
          percent: number;
          answers: unknown[];
          attempted_at: string;
        };
        Insert: {
          id?: string;
          learner_id: string;
          chapter_id: string;
          score: number;
          total: number;
          percent: number;
          answers?: unknown[];
          attempted_at?: string;
        };
        Update: {
          id?: string;
          learner_id?: string;
          chapter_id?: string;
          score?: number;
          total?: number;
          percent?: number;
          answers?: unknown[];
          attempted_at?: string;
        };
        Relationships: [];
      };
      feedback: {
        Row: {
          id: string;
          section_id: string | null;
          chapter_id: string | null;
          learner_id: string | null;
          name: string | null;
          email: string | null;
          message: string;
          status: 'open' | 'resolved';
          created_at: string;
          resolved_at: string | null;
        };
        Insert: {
          id?: string;
          section_id?: string | null;
          chapter_id?: string | null;
          learner_id?: string | null;
          name?: string | null;
          email?: string | null;
          message: string;
          status?: 'open' | 'resolved';
          created_at?: string;
          resolved_at?: string | null;
        };
        Update: {
          id?: string;
          section_id?: string | null;
          chapter_id?: string | null;
          learner_id?: string | null;
          name?: string | null;
          email?: string | null;
          message?: string;
          status?: 'open' | 'resolved';
          created_at?: string;
          resolved_at?: string | null;
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
      chapter_completion_stats: {
        Row: {
          chapter_id: string;
          chapter_slug: string;
          chapter_title: string;
          learners_with_progress: number;
          sections_completed: number;
        };
        Relationships: [];
      };
      question_wrong_answer_stats: {
        Row: {
          chapter_id: string;
          question_id: string | null;
          wrong_count: number;
          total_attempts: number;
        };
        Relationships: [];
      };
    };
    Functions: {
      is_current_user_admin: {
        Args: Record<string, never>;
        Returns: boolean;
      };
      increment_qa_rate_limit: {
        Args: { key: string };
        Returns: number;
      };
    };
  };
}
