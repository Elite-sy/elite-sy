CREATE POLICY "Public read on downloads bucket"
ON storage.objects
FOR SELECT
TO anon, authenticated
USING (bucket_id = 'downloads');