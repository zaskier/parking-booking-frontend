import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { logout } from '../logout/action';
import { Button } from '@mui/material';

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/sign-in');
  }

  return (
    <a className="text-center">
      Hello {data.user.email}
      <form action={logout}>
        {' '}
        <Button
          style={{ backgroundColor: '#FF5733' }}
          className="min-h-12"
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}>
          Log out
        </Button>
      </form>
    </a>
  );
}
