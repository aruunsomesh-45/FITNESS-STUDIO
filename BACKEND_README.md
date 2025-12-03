# Backend & Database Setup

## Overview
This project uses **Supabase** for the backend, providing:
- PostgreSQL database with Row Level Security (RLS)
- Authentication & user management
- Real-time subscriptions
- Auto-generated TypeScript types

## Database Schema

### Tables

#### `profiles`
- **Purpose**: User profiles linked to Supabase Auth
- **Columns**: `id`, `full_name`, `avatar_url`, `role`, `created_at`
- **Features**: Automatically created when a user signs up

#### `trainers`
- **Purpose**: Fitness trainers/instructors
- **Columns**: `id`, `name`, `bio`, `specialty`, `image_url`, `created_at`
- **Sample Data**: Includes 4 sample trainers

#### `classes`
- **Purpose**: Fitness classes/sessions
- **Columns**: `id`, `name`, `description`, `trainer_id`, `start_time`, `duration_min`, `capacity`, `created_at`
- **Relationships**: Links to `trainers` table
- **Sample Data**: Includes 4 upcoming classes

#### `bookings`
- **Purpose**: User class bookings
- **Columns**: `id`, `user_id`, `class_id`, `status`, `created_at`
- **Relationships**: Links to `profiles` and `classes`
- **Statuses**: `confirmed`, `cancelled`, `waitlist`

## Security (Row Level Security)

All tables have RLS enabled with the following policies:

- **Profiles**: Viewable by all, users can only update their own
- **Trainers**: Viewable by all
- **Classes**: Viewable by all
- **Bookings**: Users can only view/create their own bookings

## File Structure

```
src/
├── lib/
│   ├── database.types.ts      # Auto-generated TypeScript types
│   ├── supabase.ts            # Supabase client initialization
│   ├── api.ts                 # API helper functions
│   └── hooks/
│       ├── useAuth.ts         # Authentication hook
│       ├── useTrainers.ts     # Trainers data hook
│       └── useClasses.ts      # Classes data hook
└── components/
    └── ClassesListExample.tsx # Example component using the API
```

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Then update `src/lib/supabase.ts` to use environment variables:

```typescript
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
```

### 2. Install Dependencies

```bash
npm install @supabase/supabase-js
```

## Usage Examples

### Fetching Trainers

```typescript
import { useTrainers } from '@/lib/hooks/useTrainers'

function MyComponent() {
  const { trainers, loading, error } = useTrainers()
  
  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage error={error} />
  
  return (
    <div>
      {trainers.map(trainer => (
        <div key={trainer.id}>{trainer.name}</div>
      ))}
    </div>
  )
}
```

### Fetching Classes

```typescript
import { useClasses } from '@/lib/hooks/useClasses'

function ClassesPage() {
  const { classes, loading, error, refetch } = useClasses()
  
  return (
    <div>
      {classes.map(classItem => (
        <div key={classItem.id}>
          <h3>{classItem.name}</h3>
          <p>Trainer: {classItem.trainers?.name}</p>
        </div>
      ))}
    </div>
  )
}
```

### Authentication

```typescript
import { useAuth } from '@/lib/hooks/useAuth'

function LoginForm() {
  const { signIn, signUp, signOut, user } = useAuth()
  
  const handleLogin = async () => {
    try {
      await signIn('email@example.com', 'password')
    } catch (error) {
      console.error('Login failed:', error)
    }
  }
  
  return (
    <div>
      {user ? (
        <button onClick={signOut}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}
    </div>
  )
}
```

### Booking a Class

```typescript
import { api } from '@/lib/api'
import { useAuth } from '@/lib/hooks/useAuth'

function BookButton({ classId }: { classId: string }) {
  const { user } = useAuth()
  
  const handleBook = async () => {
    if (!user) {
      alert('Please sign in to book a class')
      return
    }
    
    try {
      await api.bookClass(classId, user.id)
      alert('Class booked successfully!')
    } catch (error) {
      alert('Booking failed: ' + error.message)
    }
  }
  
  return <button onClick={handleBook}>Book Class</button>
}
```

## Available API Functions

### Trainers
- `api.getTrainers()` - Get all trainers
- `api.getTrainerById(id)` - Get a specific trainer

### Classes
- `api.getClasses()` - Get all classes
- `api.getUpcomingClasses()` - Get next 10 upcoming classes
- `api.getClassById(id)` - Get a specific class

### Bookings
- `api.bookClass(classId, userId)` - Book a class
- `api.getUserBookings(userId)` - Get user's bookings
- `api.cancelBooking(bookingId)` - Cancel a booking

### Profiles
- `api.getUserProfile(userId)` - Get user profile
- `api.updateUserProfile(userId, updates)` - Update user profile

## Database Access

### Supabase Dashboard
- **Project**: zoku-fitness
- **Region**: ap-southeast-1
- **URL**: https://whwkktrecqssjfdvuicz.supabase.co
- **Database**: PostgreSQL 17

### Direct SQL Access

You can run SQL queries directly using the Supabase MCP tools or through the Supabase dashboard.

## Next Steps

1. ✅ Database schema created
2. ✅ Sample data inserted
3. ✅ TypeScript types generated
4. ✅ API functions created
5. ✅ React hooks implemented
6. ✅ Authentication setup
7. 🔲 Integrate with existing components
8. 🔲 Add real-time subscriptions
9. 🔲 Implement file storage for trainer images
10. 🔲 Add admin dashboard for content management

## Support

For more information, check out the [Supabase Documentation](https://supabase.com/docs).
