import { useEffect, useState } from 'react'

export const RESUME_FILE_NAME = 'AarohiNadkarniResumeF2024.pdf'

const constants = {
  urls: {
    /**
     * Linkedin URL as a string
     */
    LINKEDIN_URL: 'https://www.linkedin.com/in/aarohi-nadkarni/',
    /**
     *
     * @returns string link to the uploaded resume
     */
    RESUME_URL: () => {
      const [resumeUrl, setResumeUrl] = useState<string>('#')
      useEffect(() => {
        if (typeof window !== 'undefined') {
          setResumeUrl(`${window.location.origin}/${RESUME_FILE_NAME}`)
        }
      }, [setResumeUrl])
      return resumeUrl
    },
    // GITHUB_REPO_URL: 'https://github.com/SammyRobensParadise/Portfolio',
    GITHUB_URL: 'https://github.com/aarohinadkarni'
  }
}
export default constants
