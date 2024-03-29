export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      cakes: {
        Row: {
          color: string
          cream_id: string | null
          created: string
          event_id: string | null
          font_color: string
          font_id: string | null
          font_size: number
          id: string
          message: string
          status: Database["public"]["Enums"]["cake_status"]
          stickers: Json
          user_id: string | null
        }
        Insert: {
          color: string
          cream_id?: string | null
          created?: string
          event_id?: string | null
          font_color: string
          font_id?: string | null
          font_size: number
          id?: string
          message: string
          status?: Database["public"]["Enums"]["cake_status"]
          stickers: Json
          user_id?: string | null
        }
        Update: {
          color?: string
          cream_id?: string | null
          created?: string
          event_id?: string | null
          font_color?: string
          font_id?: string | null
          font_size?: number
          id?: string
          message?: string
          status?: Database["public"]["Enums"]["cake_status"]
          stickers?: Json
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_cream"
            columns: ["cream_id"]
            isOneToOne: false
            referencedRelation: "creams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_event"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_font"
            columns: ["font_id"]
            isOneToOne: false
            referencedRelation: "fonts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      creams: {
        Row: {
          id: string
          price: number | null
          url: string
        }
        Insert: {
          id?: string
          price?: number | null
          url: string
        }
        Update: {
          id?: string
          price?: number | null
          url?: string
        }
        Relationships: []
      }
      events: {
        Row: {
          created: string
          date: string
          description: string
          id: string
          name: string
          status: Database["public"]["Enums"]["event_status"]
          user_id: string
        }
        Insert: {
          created?: string
          date: string
          description: string
          id?: string
          name: string
          status?: Database["public"]["Enums"]["event_status"]
          user_id: string
        }
        Update: {
          created?: string
          date?: string
          description?: string
          id?: string
          name?: string
          status?: Database["public"]["Enums"]["event_status"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      fonts: {
        Row: {
          family: string
          id: string
        }
        Insert: {
          family: string
          id?: string
        }
        Update: {
          family?: string
          id?: string
        }
        Relationships: []
      }
      stickers: {
        Row: {
          id: string
          price: number | null
          url: string
        }
        Insert: {
          id?: string
          price?: number | null
          url: string
        }
        Update: {
          id?: string
          price?: number | null
          url?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          id: string
          nickname: string
          uri: string
        }
        Insert: {
          id: string
          nickname: string
          uri?: string
        }
        Update: {
          id?: string
          nickname?: string
          uri?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      cake_status: "public" | "delete" | "report" | "deny"
      event_status: "public" | "private" | "delete"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
